import { useDispatch, useSelector } from 'react-redux';
import { setVolumeSound, toggleMuteSound } from '../../redux/actions';
import SoundItem from './SoundItem';
import { cn } from '../../lib/utils';

export default function VolumeSettings({minimized}) {
  const dispatch = useDispatch();
  const sounds = useSelector((state) => state.sound); 

  const handleToggleMute = (soundId) => {
    dispatch(toggleMuteSound(soundId));
  }
  const handleVolumeChange = (soundId, newVolume) => {
    dispatch(setVolumeSound(soundId, newVolume)); 
  };
  if (minimized) {
    return null; 
}
  return (
    <div className={cn("space-y-4 px-5 overflow-y-auto h-[30vh]")}>
      <h2 className={cn("text-xl my-3 text-white")}>🌧 Sound Settings 🌳</h2>
      {sounds.map((sound) => (
        <SoundItem
          key={sound.id}
          sound={sound}
          handleVolumeChange={handleVolumeChange}
          handleToggleMute={handleToggleMute}
        />
      ))}
    </div>
  );
}




