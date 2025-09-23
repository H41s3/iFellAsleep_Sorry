import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Sun } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [doodles, setDoodles] = useState<Array<{ id: number; left: number; top: number; rotation: number; delay: number }>>([]);

  useEffect(() => {
    // Create scattered doodle elements
    const doodleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      top: Math.random() * 90 + 5,
      rotation: Math.random() * 360,
      delay: Math.random() * 2
    }));
    setDoodles(doodleArray);

    // Show message after a short delay
    setTimeout(() => setShowMessage(true), 800);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden" 
         style={{ 
           backgroundImage: `
             radial-gradient(circle at 20% 30%, rgba(255, 235, 59, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(255, 152, 0, 0.05) 0%, transparent 50%)
           `
         }}>
      
      {/* Scattered Doodle Elements */}
      {doodles.map((doodle) => (
        <div
          key={doodle.id}
          className="absolute animate-pulse opacity-20"
          style={{
            left: `${doodle.left}%`,
            top: `${doodle.top}%`,
            transform: `rotate(${doodle.rotation}deg)`,
            animationDelay: `${doodle.delay}s`,
            animationDuration: '4s'
          }}
        >
          {doodle.id % 4 === 0 && <Heart className="w-4 h-4 text-yellow-500 fill-current" />}
          {doodle.id % 4 === 1 && <Star className="w-3 h-3 text-amber-500 fill-current" />}
          {doodle.id % 4 === 2 && <Sun className="w-4 h-4 text-orange-400" />}
          {doodle.id % 4 === 3 && <Sparkles className="w-3 h-3 text-yellow-600" />}
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header - Doodle Style */}
        <div className="text-center mb-12 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-4 border-yellow-300 relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Doodle decorations around header */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 animate-bounce"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-amber-400 rounded-full border-2 border-amber-600 animate-bounce delay-500"></div>
            <div className="absolute -bottom-3 left-8 w-5 h-5 bg-orange-400 rounded-full border-2 border-orange-600 animate-bounce delay-1000"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-4 transform -skew-x-2" 
                style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '3px 3px 0px rgba(255, 193, 7, 0.3)' }}>
              I'm Sorry, My Love! 💛
            </h1>
            <p className="text-xl text-amber-700 font-medium transform skew-x-1" 
               style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
              Your sleepy man needs forgiveness... 🥺
            </p>
            
            {/* Hand-drawn style arrow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <svg width="40" height="30" viewBox="0 0 40 30" className="text-yellow-600 animate-bounce">
                <path d="M20 5 Q25 15 20 25 Q15 15 20 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M15 20 L20 25 L25 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Apology Section - Doodle Style */}
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-dashed border-yellow-400 transform rotate-1 hover:-rotate-1 transition-all duration-500 relative">
              {/* Doodle tape effect */}
              <div className="absolute -top-4 left-8 w-16 h-8 bg-yellow-200 border-2 border-yellow-400 rounded transform -rotate-12 opacity-80"></div>
              <div className="absolute -top-3 right-12 w-12 h-6 bg-amber-200 border-2 border-amber-400 rounded transform rotate-45 opacity-80"></div>
              
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXQ0anoxa2N6ZTFzYTFqMDRldTV0YzNvd2QxemEydXJhY2JzMTQzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZyNQFqZLFUhr2/giphy.gif" 
                alt="Begging for forgiveness GIF"
                className="w-72 h-56 object-cover rounded-2xl mx-auto shadow-lg border-4 border-yellow-300 mb-6"
              />
              <div className="bg-yellow-100 border-3 border-yellow-400 rounded-2xl p-6 transform -skew-x-1">
                <h2 className="text-4xl font-bold text-yellow-700 mb-4" 
                    style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '2px 2px 0px rgba(255, 235, 59, 0.5)' }}>
                  I Fell Asleep Again... 😴
                </h2>
                <p className="text-xl text-yellow-800 leading-relaxed max-w-2xl mx-auto font-medium" 
                   style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  I know I've done this before, and I'm truly sorry! I love our calls so much that I want to stay awake forever just to talk to you, but my sleepy brain has other plans! 
                </p>
                <div className="mt-4 text-3xl animate-bounce">🥺 Please forgive me? 🥺</div>
              </div>
            </div>
          </div>

          {/* Cute Begging Section */}
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-amber-400 transform -rotate-1 hover:rotate-1 transition-all duration-500 relative">
              {/* Doodle hearts around */}
              <div className="absolute -top-2 -left-2 text-yellow-500 animate-pulse">💛</div>
              <div className="absolute -top-3 -right-1 text-amber-500 animate-pulse delay-500">🧡</div>
              <div className="absolute -bottom-2 left-4 text-orange-500 animate-pulse delay-1000">💛</div>
              
              <img 
                src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
                alt="Cute begging GIF"
                className="w-80 h-60 object-cover rounded-2xl mx-auto shadow-lg border-4 border-amber-300 mb-6"
              />
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-3 border-amber-400 rounded-xl p-6 transform skew-x-1">
                <p className="text-2xl font-bold text-amber-800 mb-2" 
                   style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  I'm begging you... 🙏
                </p>
                <p className="text-lg text-amber-700" 
                   style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  Please give me another chance? 💛
                </p>
              </div>
            </div>
          </div>

          {/* Promise Section - Journal Style */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mb-12 border-4 border-yellow-400 relative transform rotate-0 hover:scale-105 transition-all duration-500">
            {/* Notebook lines effect */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="h-8 border-b border-yellow-300" style={{ marginTop: `${i * 32}px` }}></div>
              ))}
            </div>
            
            {/* Spiral binding holes */}
            <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-evenly">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="w-4 h-4 bg-yellow-200 border-2 border-yellow-400 rounded-full"></div>
              ))}
            </div>
            
            <div className="relative z-10 ml-12">
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold text-yellow-700 mb-4 transform -skew-x-1" 
                    style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '2px 2px 0px rgba(255, 235, 59, 0.3)' }}>
                  My Sacred Promise to You 💛
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODdkcmkzdzI0Mzd4Ynh2cDIybmNqemYzdHZjZTVlZmw5eDNyZXl5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JEZ3wy3IUQR8s/giphy.gif" 
                    alt="Promise GIF"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-xl border-4 border-yellow-300"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 text-white p-8 rounded-3xl shadow-2xl border-4 border-white/30 transform -rotate-2">
                    <h4 className="text-2xl font-bold mb-6 text-center" 
                        style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                      I Solemnly Promise I Will:
                    </h4>
                    <ul className="space-y-4 text-left">
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">💛</span>
                        <span className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                          Tell you when I'm getting sleepy
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">🧡</span>
                        <span className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                          Not fight sleep when I'm exhausted
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">💛</span>
                        <span className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                          Trust you to let me rest when needed
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">🧡</span>
                        <span className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                          Communicate better about my energy levels
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Love Declaration - Sticky Note Style */}
          <div className="text-center mb-12">
            <div className="bg-yellow-200 border-4 border-yellow-400 rounded-3xl p-10 shadow-2xl transform rotate-2 hover:-rotate-2 transition-all duration-500 relative">
              {/* Sticky note shadow */}
              <div className="absolute inset-0 bg-yellow-300 rounded-3xl transform translate-x-2 translate-y-2 -z-10"></div>
              
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXZ0ZXp1MDl1dWQwc2U1OTU0M3c5b2ozeWZkbnNreWU1bDNtNGlxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5p8jOW3f00osS705g3/giphy.gif" 
                alt="Love GIF"
                className="w-64 h-40 object-cover rounded-2xl mx-auto mb-8 shadow-xl border-4 border-yellow-500"
              />
              <h3 className="text-4xl font-bold mb-6 text-yellow-800 transform -skew-x-1" 
                  style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '2px 2px 0px rgba(255, 193, 7, 0.3)' }}>
                The Truth Is...
              </h3>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-6 text-yellow-900" 
                 style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                I want to do <em>everything</em> with you - talk for hours, spend quality time together, 
                AND fall asleep peacefully knowing you're there. You mean the world to me, and I promise 
                to be better at communicating when I need rest. 
              </p>
              <div className="bg-yellow-300 border-3 border-yellow-500 rounded-2xl p-4 inline-block transform -rotate-1">
                <span className="text-3xl font-bold text-yellow-800" 
                      style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  💛 I'm crazy about you 💛
                </span>
              </div>
            </div>
          </div>

          {/* Final Cute Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-dashed border-amber-400 transform -rotate-1 hover:rotate-1 transition-all duration-500 relative">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-4 border-yellow-400 rounded-full"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-amber-400 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 bg-yellow-400 transform rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-4 border-orange-400 rounded-full"></div>
              
              <img 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWozcG1ieHA5Mm94eWd3MjZjazhpMG1kcWJ3bW9jbnV1bXl2Z2x0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KixSiwLL2o1znXAafU/giphy.gif" 
                alt="Please forgive me GIF"
                className="w-80 h-60 object-cover rounded-2xl mx-auto shadow-xl border-4 border-amber-300 mb-6"
              />
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-3 border-yellow-400 rounded-xl p-6 transform skew-x-1">
                <p className="text-2xl text-yellow-800 font-bold mb-2" 
                   style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  Please forgive your sleepy but loving man? 🥺
                </p>
                <p className="text-lg text-amber-700" 
                   style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                  I promise to be better! 💛
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating doodle elements */}
      <div className="absolute top-20 left-10 animate-bounce text-4xl">💛</div>
      <div className="absolute top-32 right-16 animate-bounce delay-1000 text-3xl">⭐</div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-500 text-4xl">🌟</div>
      <div className="absolute bottom-32 right-10 animate-bounce delay-1500 text-3xl">💛</div>
      <div className="absolute top-1/2 left-8 animate-pulse text-2xl">☀️</div>
      <div className="absolute top-1/3 right-8 animate-pulse delay-1000 text-2xl">🧡</div>

      {/* Footer with signature */}
      <div className="fixed bottom-4 right-4 md:right-8 z-50">
        <div className="bg-yellow-200/90 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl px-4 py-2 md:px-6 md:py-3 transform rotate-2 shadow-lg">
          <p className="text-yellow-800 font-bold text-sm md:text-lg" 
             style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            - Emilio 💛
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;