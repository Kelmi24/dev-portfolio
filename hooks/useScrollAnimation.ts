'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return { ref, isInView };
}
