import { useState, useEffect, useCallback } from 'react';
import vocabularyService from '../services/vocabularyService';

export function useVocabularyList(params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await vocabularyService.getAll(params);
      setData(result);
    } catch (err) {
      setError(err.message || 'Failed to load vocabulary');
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
