import './App.css';
import Testimonio from "./components/Testimonio.js";

function App() {
  return (
    <div className='App'>
      <main className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          image='Shawn'
          alt="Shawn's picture"
          name='Shawn Wang'
          country='Singapore'
          job='Software Engineer'
          company='Amazon'
          text='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
          />
          <Testimonio 
          image='Emma'
          alt="Emma's picture"
          name='Emma Bostian'
          country='Sweden'
          job='Software Engineer'
          company='Spotify'
          text='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
          />
          <Testimonio 
          image='Sarah'
          alt="Sarah's picture"
          name='Sarah Chima'
          country='Nigeria'
          job='Software Engineer'
          company='ChatDesk'
          text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          />
      </main>
    </div>
  );
}

export default App;
