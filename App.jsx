import PlayerCard from './PlayerCard';

function App() {
  return (
    <PlayerCard 
      name="S.Shabangu" 
      mainPosition="RB" 
      altPosition="RM" 
      ovr={89} 
      stats={{ pac: 79, sho: 75, pas: 89, dri: 80, def: 83, phy: 72 }} 
    />
  );
}

export default App;