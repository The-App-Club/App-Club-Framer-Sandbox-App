import {useState, useEffect} from 'react';
import gsap from 'gsap';
function useRefScrollProgress(containerDomRef, inputRef) {
  const containerRef = containerDomRef;
  const ref = inputRef;

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    if (containerRef.current && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = containerRef.current.scrollTop;
      const offsetTop = rect.top + scrollTop;
      setStart(
        gsap.utils.clamp(0, 1, offsetTop / containerRef.current.scrollHeight)
      );
      setEnd(
        gsap.utils.clamp(
          0,
          1,
          (offsetTop + rect.height) / containerRef.current.scrollHeight
        )
      );
    }
  }, [containerRef, ref]);

  return {ref, start, end};
}

export {useRefScrollProgress};
