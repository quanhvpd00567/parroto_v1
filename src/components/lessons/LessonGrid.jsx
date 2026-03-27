import React from 'react';
import LessonLibraryCard from './LessonLibraryCard';

const lessons = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5z_uvchnlRf3TQMWyVUwQcTmrEfZwA7ty-vRIjsylwRtmSUqV5t-pYTnqhwZLhG4EZPb4XHB2xDQDkUtosl9mLQGa9TdtMaQPVXqYTe_ESLO2jK_MMtus_F58DICrfm6QpA43CR-PTwp1zJTMOF9oejEXkhWCMTZ62Gn3X0TcI35Rhl6ugvKpHaXpQovsk2KZ_tHDcgG9E6AoKEtmsn-VJsssJybYBPcZuAFoiXIzs72YK_Wk2KoAJWoHl5qVgWxmsjd57B1fVS1d',
    level: 'Beginner',
    category: 'Culture & Food',
    rating: '4.9',
    title: 'Ordering at a Parisian Café',
    description: 'Master the essential vocabulary and etiquette for your first morning in Paris.',
    duration: '12 mins',
    vocabCount: '15 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcYIh95NGSR_t98Cm6MIVMAqzH1yR6vqpQBh56JTHg5kCMatvuHIOG603lt2smkGUNjD3yC4O4EUiNgUuu6MKP7X2XOn8Y_ZYYEi3hAwuv-9wyGOncqj2U4tdkPp8OeGyEbg_ePrW-l9fhlY0-I7PyCONVdQqe4t5cojvvbUVzg8CYzGF6FGywcpY9nacvdnvSHzJ0ha0Iw_AUfdbW_SP1kdSSMOAZNtlnRRajnWGw1kvJzQfaaYCBdQdpBQIl6riliwnqyl9okqo',
    level: 'Intermediate',
    category: 'Business',
    rating: '4.7',
    title: 'Networking Basics',
    description: 'Learn how to introduce yourself and your work in a professional social setting.',
    duration: '20 mins',
    vocabCount: '22 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASPdnkuH_g9KL6N_gUoOkmzzJStOxSk4Oo2gbloEdRhDCew8feDEhSAR9tIVQDTcTYyc-qQVXzM2q-JLStRMbraG-RaAx1xT8nCuwMqTltGMn3PL_hqReisometxxUcTLBg3ghH7YZib207ZEB6prHeMe-tR8SSV_h9IkUrg2ZkPo7gmAngq7AoRcVZ8eCRRUGaufAck7MKmHsodIQ4N1pFV7wA7w1TKCifEm-en3cidkhY05hQN7eKuQmmbgd4ZWglTXgnb8JDp0D',
    level: 'Advanced',
    category: 'Grammar',
    rating: '5.0',
    title: 'The Subjunctive Mood',
    description: 'Deep dive into expressing desires, doubts, and hypothetical situations with precision.',
    duration: '35 mins',
    vocabCount: '8 Rules'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN4y2xhyuJ0fp5okdYB3IpIJg-EeM1gI2aZdpcllRzraUlnfWj09q8Ft3Q3_sNUb_ESKZGjdUshdPJmOnxDTrAty18ApykDEGe8ArOQEwl92NmrKrHt9XuzbGG_BIr24UMg7u3_aoV43CW1-HaJxyKZOAj1Mvsi1vUqDL63HztY2jFNRE5l1rF8Nb0g9VXDmM-Aqx4O2QhyCVO_G-cbKJ1mFhZW1Xi9n_0WXIFVKkgQheawomOw4JgQ5dXH50lQanyRjU2DbKykrj3',
    level: 'Beginner',
    category: 'Travel',
    rating: '4.8',
    title: 'Asking for Directions',
    description: 'Never get lost again. Learn how to navigate city streets like a local.',
    duration: '15 mins',
    vocabCount: '12 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-8Az2p125vJhBZkofbKH4Kb1qTts_gGMvSHGKY05b5pGGrtM13IXRZss6go5kBotre048h5rfkA0zzZQ92t-zX2y3c0OjYWHPQ1_xEGbWOyXdkFtD_syQ3Ckly99Lg6WISZzbeNNBeY-dNyNcjTQ7PnPB8-rq9rXqugOB0dB258cKMbtfk5iOknmddMET2NUECMrBHqfgW-ypHgs40b93a3fifNjuuTrzh_oG8M7ZKLbEibVC6bV7uVreWDjAR9PtezDjrQNXucik',
    level: 'Intermediate',
    category: 'Daily Life',
    rating: '4.6',
    title: 'The Perfect Taco Night',
    description: 'Explore the culinary verbs and traditional ingredient names in an authentic context.',
    duration: '18 mins',
    vocabCount: '20 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6p1XomZkpeHTbyH3_1U_ZGebt3YsPlxjc1QvKgH5jSTe0OHanbD7SrBOgBhmRH9F6HtSH9VCpz_tRpR0iM-Hqev3pYVrlbHHrIZFLzhFnke-4aLGMky03uR7mNuo7xICy5B8LfGamJ7_cxOGIdNKpYLBQNX5LQDpX34yXUmNLdSbUB3xgZEHo-oui-SJw2AipxUaAodi3ub1fADC8U9ySBfjeRcPOUedYkj395683kg5jyRzNvIkma5nHozRQBlra8UtXHfYFVzdm',
    level: 'Advanced',
    category: 'Science',
    rating: '4.9',
    title: 'Academic Presentations',
    description: 'Structure complex arguments and present data fluently in your target language.',
    duration: '40 mins',
    vocabCount: '35 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFRT5KSV9GbhsKl2hWblBn12s1KDsS1MYvWHauKJPN8Y0edEXAFzAooQBV5p1y0SUnLeK3Pud7HzIVonAoBkxCk01pGbd1K9L8YuYZeMCiR7-QcvHM6GVuC_KXSLy-3SPwuJWvMGsKeN_leWkFyFY3BJM_-RE6WZm9w56LMKGYBNEStsnecuPYnet6ev4mjLJJ8GkaDgHMoUOVH-3DY1kOs9akWhrlpc1ONzvnc2T282LV_YnYvcN16EI5Irxz1srUZUNpPHizBF3H',
    level: 'Intermediate',
    category: 'Literature',
    rating: '4.7',
    title: 'Contemporary Fiction',
    description: 'Read and analyze excerpts from award-winning modern short stories.',
    duration: '25 mins',
    vocabCount: '18 Vocab'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1oSxnnMZTggRrm5-g8Kiu10s1JxOkG3DGuVljXJnZ5E6yipr65s8RsjJ-u1PZTmKBbdRxTBU9CbKg13tIwi_KnrFz-lcPpl0UOsaRj4To100IiR2h-9NMkmOrydI0msnnYsQFbhxqWxJcxnBiZbKziL-mMDX9hFzofcrNAywGAD_X2NccH1V1kg_FGI8yElue44zHS1GibSPQRKtSmSVN0_mZMqr0FDTuVUNRmHnEXFlitINhERTkHxMdj704opM3zpECXt2D9pdV',
    level: 'Beginner',
    category: 'Leisure',
    rating: '4.5',
    title: 'Music & Nightlife',
    description: 'Essential phrases for concert-goers and music lovers exploring the scene.',
    duration: '10 mins',
    vocabCount: '10 Vocab'
  }
];

const LessonGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {lessons.map((lesson, index) => (
          <LessonLibraryCard key={index} {...lesson} />
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-2">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full font-bold">1</button>
        <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-full font-bold">2</button>
        <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-full font-bold">3</button>
        <span className="px-2 text-outline">...</span>
        <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-full font-bold">12</button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </>
  );
};

export default LessonGrid;
