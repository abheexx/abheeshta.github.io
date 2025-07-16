import { useCallback } from 'react';

// Create audio context lazily to avoid autoplay restrictions
let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};

const createSpaceEngineSound = (context: AudioContext) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  
  // Configure filter for clarity
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(2000, context.currentTime);
  filter.Q.setValueAtTime(2, context.currentTime);
  
  // Clean sine wave for clear tone
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.1);
  
  // Smooth envelope
  gain.gain.setValueAtTime(0, context.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, context.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);
  
  // Connect nodes
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  
  // Start and stop
  oscillator.start();
  oscillator.stop(context.currentTime + 0.3);
};

const createHoverSound = (context: AudioContext) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  
  // Pure sine wave for clarity
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(880, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1760, context.currentTime + 0.1);
  
  // Quick, subtle envelope
  gain.gain.setValueAtTime(0, context.currentTime);
  gain.gain.linearRampToValueAtTime(0.03, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
  
  oscillator.connect(gain);
  gain.connect(context.destination);
  
  oscillator.start();
  oscillator.stop(context.currentTime + 0.1);
};

const createClickSound = (context: AudioContext) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  
  // Higher frequency for distinct click
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(1760, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.05);
  
  // Very quick envelope for sharp click
  gain.gain.setValueAtTime(0, context.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);
  
  oscillator.connect(gain);
  gain.connect(context.destination);
  
  oscillator.start();
  oscillator.stop(context.currentTime + 0.05);
};

export const useSound = () => {
  const playHoverSound = useCallback(() => {
    try {
      const context = getAudioContext();
      createHoverSound(context);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  }, []);

  const playClickSound = useCallback(() => {
    try {
      const context = getAudioContext();
      createClickSound(context);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  }, []);

  const playSpaceHum = useCallback(() => {
    try {
      const context = getAudioContext();
      createSpaceEngineSound(context);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  }, []);

  return {
    playHoverSound,
    playClickSound,
    playSpaceHum
  };
};