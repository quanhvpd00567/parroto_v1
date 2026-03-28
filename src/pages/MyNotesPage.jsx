import React, { useState, useEffect, useCallback, useRef } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import NoteCard from '../components/notes/NoteCard';
import NoteSearchFilters from '../components/notes/NoteSearchFilters';
import noteService from '../services/noteService';

const MyNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [page, setPage] = useState(1);
  const [deleteLoading, setDeleteLoading] = useState(null);

  const fetchNotes = useCallback(async (targetPage, term) => {
    setLoading(true);
    try {
      const response = await noteService.getNotes({
        page: targetPage,
        limit: 10,
        search: term || undefined
      });

      if (targetPage === 1) {
        setNotes(response.data);
      } else {
        setNotes(prev => {
          // Prevent duplicates in case of race conditions or double calls
          const existingIds = new Set(prev.map(n => n.id));
          const filteredNew = response.data.filter(n => !existingIds.has(n.id));
          return [...prev, ...filteredNew];
        });
      }
      setMeta(response.meta || {});
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load notes');
    } finally {
      setLoading(false);
    }
  }, []);

  // Sync fetch with page and activeSearch
  useEffect(() => {
    fetchNotes(page, activeSearch);
  }, [page, activeSearch, fetchNotes]);

  const handleSearch = () => {
    if (page === 1 && activeSearch === searchValue) {
      // Force refresh if already on page 1 with same search
      fetchNotes(1, searchValue);
    } else {
      setPage(1);
      setActiveSearch(searchValue);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleDeleteNote = async (noteId) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    setDeleteLoading(noteId);
    try {
      await noteService.deleteNote(noteId);
      setNotes(prev => prev.filter(n => n.id !== noteId));
      setMeta(prev => ({ ...prev, total: (prev.total || 1) - 1 }));
    } catch (err) {
      alert(err.message || 'Failed to delete note');
    } finally {
      setDeleteLoading(null);
    }
  };

  const hasMore = notes.length < (meta.total || 0);

  const renderContent = () => {
    if (loading && notes.length === 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-40 bg-surface-container-low rounded-2xl" />
          ))}
        </div>
      );
    }

    if (error && notes.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
          <span className="material-symbols-outlined text-5xl text-error/40">error</span>
          <p className="text-on-surface-variant font-medium max-w-xs">{error}</p>
          <button
            onClick={() => fetchNotes(1, true)}
            className="px-6 py-2 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Retry
          </button>
        </div>
      );
    }

    if (notes.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-24 gap-6 text-center bg-surface-container-low/30 rounded-3xl border-2 border-dashed border-outline-variant/30">
          <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">auto_stories</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-on-surface">Your sanctuary is quiet</h3>
            <p className="text-on-surface-variant max-w-xs mx-auto text-sm leading-relaxed">
              No notes found for your current search. Start saving insights from your lessons.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-12">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDeleteNote}
              loading={deleteLoading === note.id}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-surface-container-low hover:bg-primary hover:text-white transition-all duration-300 font-bold text-sm shadow-sm hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="material-symbols-outlined text-xl group-hover:rotate-180 transition-transform duration-500">history</span>
              )}
              <span>Load older notes</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full">
                <span className="material-symbols-outlined text-secondary text-xs">auto_awesome</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] font-label">The Editorial Sanctuary</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary font-headline">My Notes</h1>
              <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
                Reflect on your linguistic journey. Your curated collection of insights, grammar breakthroughs, and cultural nuances.
              </p>
            </div>
          </div>

          <NoteSearchFilters
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearchClick={handleSearch}
          />
        </div>

        {renderContent()}

        {meta.total > 0 && (
          <div className="mt-12 flex items-center justify-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
            <span>Showing {notes.length} of {meta.total} notes</span>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyNotesPage;
