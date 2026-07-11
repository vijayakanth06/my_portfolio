import { useEffect } from 'react';

const useDocumentMetadata = ({ title, description, keywords }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute('content', description);
      }
    }
    if (keywords) {
      const keyMeta = document.querySelector('meta[name="keywords"]');
      if (keyMeta) {
        keyMeta.setAttribute('content', keywords);
      }
    }
  }, [title, description, keywords]);
};

export default useDocumentMetadata;
