import React, { useState, useEffect, useRef, use } from 'react';
import './App.css';

const App = () => {
  //czas
  //lagi
  //
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [fakePosX, setFakePosX] = useState(0);
  const [fakePosY, setFakePosY] = useState(0);

  const wave3Ref = useRef(false)
  
  const [iloscruchow,setIloscruchow] = useState(5)

  const [start2,setStart2] = useState(false)
  const [light,setLight] = useState(false)
const [velocity, setVelocity] = useState({ x: 0, y: 0 });

 
  const [lightsize,setLightsize] = useState(5)
  const wallRefs = useRef([]);
  const wallRefs2 = useRef([]);
  const [gaster,setGaster] = useState([


  ])
  const gasterRefs = useRef([])
  const fanRefs = useRef([]);
  const [ping,setPing] = useState(1)
  const [walls, setWalls] = useState([
                        { left: "0vw",     top: "0vh",     width: "100vw",   height: "5.03vh" },
                        { left: "0vw",     top: "94.97vh", width: "100vw",   height: "5.03vh" },
                        { left: "0vw",     top: "0vh",     width: "3.13vw",  height: "100vh" },
                        { left: "97.40vw", top: "0vh",     width: "3.13vw",  height: "100vh" },
                        { left: "78.13vw", top: "20.12vh", width: "7.81vw",  height: "80.48vh" },
                        { left: "0vw",     top: "60.36vh", width: "62.50vw", height: "15.09vh" },
                        { left: "15.63vw", top: "20.12vh", width: "62.50vw", height: "15.09vh" },
  ]);
  const [cheat,setCheat] = useState(false)
  const [updated,setUpdated] = useState(false)

  const [bossY,setBossY] = useState(10)
  const [bosshp,setBosshp] = useState(500)
  const [wave2,setWave2] = useState(false)

  const [walls2, setWalls2] = useState([


    
  ])
  
  const [fans, setFans] = useState([


  ]);
  

    
  const [buttons,setButtons] = useState([

  {x:200,y:400,dis:false},
 {x:650,y:400,dis:false},
 {x:1100,y:400,dis:false},
 {x:1550,y:400,dis:false}




  ])
  
  const [mousesize,setMousesize] = useState(30)
  const [multi,setMulti] = useState(1)

  const targetGravity = useRef(1); // docelowa wartość
  const currentGravity = useRef(1); // płynna zmiana
  
  const [vis4,setVis4] = useState("none")
  const [vis1,setVis1] = useState("none")
  const [vis2,setVis2] = useState("none")
  const [vis3,setVis3] = useState("visible")

  const veloyRef = useRef(0);
const animationRef = useRef(null);
  const [clicked1, setClicked1] = useState("public/redno.png");
  const [clicked2, setClicked2] = useState("public/redno.png");
  const [clicked3, setClicked3] = useState("public/redno.png");
  const [clicked4, setClicked4] = useState("public/redno.png");

  const collidedBulletsRef = useRef(new Set());

  const [visible2, setVisible2] = useState("hidden");
  const [visible3, setVisible3] = useState("hidden");
  const [visible4, setVisible4] = useState("hidden");
  

  const [elements2, setElements2] = useState("hidden");
  const [elements, setElements] = useState("hidden");
  const [elements3, setElements3] = useState("hidden");

  const [sila,setSila] = useState(0.3)

  const [lvl,setLvl] = useState(0)
  const [time,setTime] = useState(0)

  const wallRef = useRef(null);
  const buttonRefs = useRef([]);

  // Track real mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (vis3 == "none") {
    let interval = null;
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 100);

    
    return () => clearInterval(interval);
    }
  }, [vis3]);
  useEffect(() => {

    if ((lvl === 4 || lvl === 5 || lvl == 10 || lvl == 18) && start2 == true) {
      veloyRef.current = 0;
  
      const fall = () => {
        // Smooth transition
currentGravity.current += (targetGravity.current - currentGravity.current) * sila;

const gravity = sila * currentGravity.current;

  
        if (lvl === 4 || lvl == 18) {
          if (veloyRef.current > 0) {
            setFakePosY(prevY => {
              if (prevY < window.innerHeight - 20) {
                veloyRef.current += gravity;
                return prevY + veloyRef.current;
              } else {
                veloyRef.current = 0;
                return window.innerHeight - 15;
              }
            });
          } else {
            setFakePosY(prevY => {
              veloyRef.current += gravity;
              return prevY + veloyRef.current;
            });
          }
        } else {
          // lvl === 5
          setFakePosY(prevY => {
            veloyRef.current += gravity;

            return prevY + veloyRef.current;
          });
        }
  
        animationRef.current = requestAnimationFrame(fall);
      };
  
      animationRef.current = requestAnimationFrame(fall);
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [lvl,start2,bosshp]); // NIE dodawaj gravityy tutaj


  





  
  useEffect(() => {
    let animationFrame;
  
    const friction = 0.98;

  
    const animate = () => {
      setFakePosX(prev => {
        const newX = prev + velocity.x;
        return newX;
      });
      setFakePosY(prev => {
        const newY = prev + velocity.y;
        return newY;
      });

      setVelocity(prev => ({
        x: prev.x * friction,
        y: prev.y * friction
      
      }));
    
      // zatrzymanie
      if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

      animationFrame = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationFrame);
  }, [velocity]);
  // Update fake cursor position
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
  
    const updateFakeCursor = () => {
      let newFakePosX = posX - centerX;
      let newFakePosY = posY - centerY;
  
      newFakePosX *= multi;
      newFakePosY *= multi;
  
      newFakePosX += centerX;
      newFakePosY += centerY;
  
      const steps = 20;
      const dx = (newFakePosX - fakePosX) / steps;
      const dy = (newFakePosY - fakePosY) / steps;
  
      let tempX = fakePosX;
      let tempY = fakePosY;
      if (lvl == 13) {
      for (let i = 0; i < steps; i++) {
        tempX += dx;
        tempY += dy;
  
        let collided = false;
  
        wallRefs.current.forEach((wall) => {
          if (!wall) return;
  
          const bounds = wall.getBoundingClientRect();
          const isOverWall =
            tempX >= bounds.left - mousesize &&
            tempX <= bounds.right &&
            tempY >= bounds.top - mousesize * 1.42 &&
            tempY <= bounds.bottom;
          
          if (isOverWall && (elements === "visible" || lvl === 12)) {
            collided = true;
          }
        });
  
        if (collided) {
          die();
          return; // przerwij update
        }
      }}

      //MYSZKA STEROWANIE
      if (lvl !== 17) {
        if ((lvl !== 14 && lvl !== 15 ) || !start2 ) {
          if (lvl !== 16 || !start2) {
            setFakePosX(newFakePosX);
          }
          
          if (!start2 || (lvl !== 4 && lvl !== 5 && lvl !== 10 && lvl !== 18)) {
            setFakePosY(newFakePosY);
          }
        }
      } else if (lvl === 17) {
        const percentX = posX / window.innerWidth;   // 0–1
        const percentY = posY / window.innerHeight;  // 0–1
      
        // X porusza się wolno w zależności od Y (słabe sterowanie)
        const newX = percentY * window.innerWidth;
      
        // Y porusza się szybko w zależności od X (silne sterowanie)
        const newY = percentX * window.innerHeight;
      
        setFakePosX(newX);
        setFakePosY(newY);
        }
        
      


    };
  
    if (lvl === 13 && start2) {
      if (time % 10 === 0) {
        if (!updated) {
          updateFakeCursor();
          setUpdated(true);
        }
      } else {
        setUpdated(false);
      }
    } else {
      updateFakeCursor();
    }
  }, [posX, posY, lvl, multi, start2, time, fakePosX, fakePosY, mousesize, elements,bosshp]);
  

  

  
  

  useEffect(() => {
    let start = Date.now();
    const amplitude = 300; // how much it moves up and down
    const centerY = 350;  // middle position
  
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const newY = centerY + amplitude * Math.sin(elapsed / 500); // 500 controls speed
      setBossY(newY);
    }, 32);
  
    return () => clearInterval(interval);
  }, []);
  
  
  //ANIMACJE
  useEffect(() => {
    if (lvl === 11 || lvl == 15 || lvl == 17) {
      const interval = setInterval(() => {
        setWalls(prevWalls =>
          prevWalls.map(wall => {
            if (wall.up === true) {
              const newTop = wall.top + (wall.dy || 0);
  
              if (lvl != 19 && lvl != 20) {

              if (newTop < 0 || newTop + wall.height > window.innerHeight) {
                return { ...wall, dy: -(wall.dy || 0) };
              }
            }

              return { ...wall, top: newTop };
            }

            return wall; // unchanged
            
          })
          
        );
      }, 5);
  
      return () => clearInterval(interval);
    }
  }, [lvl]);
  useEffect(() => {
    if (![11, 15, 17, 19, 20].includes(lvl)) return;
  
    const interval = setInterval(() => {
      setWalls(prevWalls => {
        const nextWalls = [];
  
        for (let i = 0; i < prevWalls.length; i++) {
          const wall = prevWalls[i];
  
          if (!wall) {
            console.error(`❌ Wall at index ${i} is undefined`);
            continue;
          }
  
          if (typeof wall.left !== 'number' || typeof wall.width !== 'number') {
            console.error(`❌ Invalid wall at index ${i}:`, wall);
            continue;
          }
  
          try {
            const dy = typeof wall.dy === 'number' ? wall.dy : 0;
            const newLeft = wall.left + dy;
  
            if (!wall.up) {
              // Bounce unless lvl 19/20
              if (![19, 20].includes(lvl)) {
                if (newLeft < 0 || newLeft + wall.width > window.innerWidth) {
                  nextWalls.push({ ...wall, dy: -dy });
                  continue;
                }
              }
  
              // Move normally
              nextWalls.push({ ...wall, left: newLeft });
              continue;
            }
  
            // If wall.up is true, no movement
            nextWalls.push(wall);
          } catch (err) {
            console.error("💥 Crash while processing wall:", wall, err);
          }
        }
  
        return nextWalls.filter(
          wall =>
            wall &&
            wall.left + wall.width > 0 &&
            wall.left < window.innerWidth
        );
      });
    }, 5);
  
    return () => clearInterval(interval);
  }, [lvl]);
  
  
  
  
  
  // Check collision with wall
// Continuous collision detection for moving walls
useEffect(() => {
  const interval = setInterval(() => {
    wallRefs.current.forEach((wallEl, i) => {
      if (!wallEl) return;

      const wall = walls[i];
      if (!wall) {
        console.warn(`⚠️ wall at index ${i} is undefined`);
        return;
      }

      const bounds = wallEl.getBoundingClientRect();

      if (!wall.bullet) {
        const isOverWall =
          fakePosX >= bounds.left - mousesize &&
          fakePosX <= bounds.right &&
          fakePosY >= bounds.top - mousesize * 1.42 &&
          fakePosY <= bounds.bottom;

        const opacity = parseFloat(getComputedStyle(wallEl).opacity);

        if ((opacity > 0.6 || lvl != 20) && isOverWall && (elements === "visible" || lvl === 12)) {
          die();
        }
      } else {
        if (collidedBulletsRef.current.has(i)) return;

        const bossX = 1600;
        const bossHeight = 200 * 1.42;

        const isOverBoss =
          bossX >= bounds.left &&
          bossX  <= bounds.right &&
          bossY + bossHeight >= bounds.top &&
          bossY - bossHeight <= bounds.bottom;

        if (isOverBoss) {
          console.log("hit bullet", i);
          setBosshp(prev => prev - 3);
        }
      }
    });
  }, 5);

  return () => clearInterval(interval);
}, [fakePosX, fakePosY, bossY, mousesize, elements, lvl, walls,velocity]);







// One-time checks for static walls and fans, triggered on position change
useEffect(() => {
  wallRefs2.current.forEach((wall2) => {
    if (!wall2) return;

    const bounds = wall2.getBoundingClientRect();
    const isOverWall =
      fakePosX >= bounds.left - mousesize &&
      fakePosX <= bounds.right &&
      fakePosY >= bounds.top - mousesize * 1.42 &&
      fakePosY <= bounds.bottom;

    if (isOverWall && elements2 === "visible") {
      die();
    }
  });

  fanRefs.current.forEach((fanRef, index) => {
    const fanData = fans[index];
    if (!fanRef || !fanData) return;

    const bounds = fanRef.getBoundingClientRect();
    const isOverFan =
      fakePosX >= bounds.left - mousesize &&
      fakePosX <= bounds.right &&
      fakePosY >= bounds.top - mousesize * 1.42 &&
      fakePosY <= bounds.bottom;

    if (isOverFan && elements3 === "visible") {
      if (lvl === 18) {
        veloyRef.current = fanData.stry === 0 ? 0 : veloyRef.current + fanData.stry * 5;
      } else {
        setVelocity(v => ({
          x: v.x + fanData.strx,
          y: v.y + fanData.stry
        }));
      }
    }
  });
}, [fakePosX, fakePosY, mousesize, elements2, elements3, lvl, fans]);




const lastSpawnedTimeRef = useRef(null);




useEffect(() => {
  if (gaster.length === 0) return;

  gaster.forEach((blaster) => {
    const wallId = Date.now() + Math.random();

    const spawnTimer = setTimeout(() => {
      // Create laser wall
      setWalls(prev => [
        ...prev,
        {
          id: wallId,
          top: blaster.rotate ? blaster.top + 150 : blaster.top + (blaster.height / 2) - 120,
          left: blaster.rotate ? blaster.left + 150 : blaster.left - 2000 + blaster.width,
          width: blaster.rotate ? 80 : 2000,
          height: blaster.rotate ? 1000 : 80,
          blaster: true,
          rotate: blaster.rotate,
        },
      ]);

      // Remove laser after animation
      setTimeout(() => {
        setWalls(prev => prev.filter(w => w.id !== wallId));
      }, 600);
    }, 600);

    // Clean up (if needed)
    return () => clearTimeout(spawnTimer);
  });
}, [gaster]);






function startGasterWaves() {
  if (wave3Ref.current) {


    setTimeout(() => {
      setGaster([
        { id: Date.now() + Math.random(), top: 50, left: 200, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 600, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 1000, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 1400, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 1800, height: 400, width: 400, rotate: true },
      ]);
    }, 0);
  
    // Wave 2
    setTimeout(() => {
      setGaster([
        { id: Date.now() + Math.random(), top: 50, left: 0, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 400, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 800, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 1200, height: 400, width: 400, rotate: true },
        { id: Date.now() + Math.random(), top: 50, left: 1600, height: 400, width: 400, rotate: true },
      ]);
    }, 1500);
    console.log(wave2 + "fff")
    if (wave3Ref.current) {
    // Wave 3
    setTimeout(() => {
      setGaster([
        { id: Date.now() + Math.random(), top: 100, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 300, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 500, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 700, left: 1600, height: 400, width: 400, rotate: false },
      ]);
    }, 3000);
  
    // Wave 4
    setTimeout(() => {
      setGaster([
        { id: Date.now() + Math.random(), top: 0, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 250, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 500, left: 1600, height: 400, width: 400, rotate: false },
        { id: Date.now() + Math.random(), top: 750, left: 1600, height: 400, width: 400, rotate: false },
      ]);
    }, 4500);
    }
  

  }
  // Wave 1
  

  // 🔁 Repeat after full cycle (e.g. after 6 seconds)
  if (wave3Ref.current) {
    setTimeout(() => {
      startGasterWaves();
    }, 6000); 
  }

}
useEffect(() => {

  let wallspeed = 3

  if (lvl !== 20) return;


  if (bosshp < 400 && bosshp > 300  && !wave3Ref.current) {
    wallspeed = 2
  } else if (bosshp <= 300 && bosshp > 100  && !wave3Ref.current) {
    wallspeed = 1
  }
  

  if (bosshp < 300 && !wave3Ref.current) {

  } else {
    setWalls2([])
  }

  if (bosshp < 0 && !wave3Ref.current) {

      wave3Ref.current = true
      setWave2(true)
      setElements("visible")
      setElements2("hidden")
      setBosshp(500); // reset boss HP
      startGasterWaves(); // begin repeating wave pattern
      setWalls([
        { left: 0,     top: 0   ,  width: 2000,   height: 120 },
        { left: 0,     top: 880   ,  width: 2000,   height: 120 },
      ])
    



  } else {
    
    if (bosshp < 300 && wave3Ref.current) {
      wallspeed = 7;
  
      if (time % wallspeed === 0 && time > wallspeed + lastSpawnedTimeRef.current && start2) {
        const newWall = {
          left: 1600,
          top: bossY + 100,
          width: 100,
          height: 500,
          dy: -4,
          up: false,
          bullet: false,
        };
  
        setWalls(prevWalls => [...prevWalls, newWall]);
        lastSpawnedTimeRef.current = time;
      }
  
    } else {
      if (time % wallspeed === 0 && time > wallspeed + lastSpawnedTimeRef.current && start2) {
        const newWall = {
          left: 1600,
          top: bossY + 100,
          width: 50,
          height: 150,
          dy: -3,
          up: false,
          bullet: false,
        };
  
        setWalls(prevWalls => [...prevWalls, newWall]);
        lastSpawnedTimeRef.current = time;
      }
    }
  }

  

}, [lvl, bossY, time,bosshp,wave2]);







  const handleClick = () => {

    if (lvl == 20) {
      setWalls(prevWalls => [
        ...prevWalls,
        { left: posX + 50, top: fakePosY, width: 50, height: 10, dy: 10, up: false, bullet:true}
      ]);
    }
    if ((lvl == 14 || lvl == 15 ) && start2) {
      if ((Math.abs(velocity.x)< 0.1 && Math.abs(velocity.y) < 0.1)) {
let dx = (fakePosX + mousesize/2) - posX;
let dy = (fakePosY + mousesize*0.71) - posY;

const forceMultiplier = 0.1;

// ⛔ Max launch speed (adjust as needed)
const maxSpeed = 25;
setIloscruchow(prev => prev -1)
if (iloscruchow == -1) {
  die()
}
// Final velocity (clamped)
let vx = dx * forceMultiplier;
let vy = dy * forceMultiplier;

const speed = Math.sqrt(vx * vx + vy * vy);
if (speed > maxSpeed) {
  const scale = maxSpeed / speed;
  vx *= scale;
  vy *= scale;
}

setVelocity({ x: vx, y: vy });
      }


    



    }
    if (lvl == 4) {
        console.log("JUMP")
        veloyRef.current = -15;


    }
    if (lvl == 5 || lvl == 10) {
      if (lvl == 10 ) {
        targetGravity.current = -1
      }
      if (elements == "visible" && elements2=="hidden" && lvl == 10) {
        targetGravity.current = 1;
      } else if (elements2 == "visible" && elements=="hidden") {
        targetGravity.current = -1;
      }
      if (lvl == 5) {
        targetGravity.current = targetGravity.current * -1;
      }

      if (targetGravity.current > 0 ) {
        veloyRef.current = veloyRef.current +  4
      } else {
        veloyRef.current = veloyRef.current - 4
      }
      

    }
    if (lvl == 8 || lvl == 10  || (bosshp < 300  && !wave3Ref.current) && start2) {
      if (elements == "hidden") {
        setElements("visible");
        setElements2("hidden")
        
      } else {
        setElements2("visible");
        setElements("hidden")
      }
    }
    buttonRefs.current.forEach((btn, index) => {
      if ((btn && Math.abs(velocity.x) < 2 && Math.abs(velocity.y) < 2) || lvl != 14) {
        const bounds = btn.getBoundingClientRect();
        const isOverButton =
        fakePosX >= bounds.left - mousesize &&
        fakePosX <= bounds.right&&
        fakePosY >= bounds.top - mousesize * 1.42 &&
        fakePosY <= bounds.bottom;

        if (isOverButton) {
          if (index === 0 ) {

            setElements3("visible")

            setClicked1("public/redyes.png");

            setElements("visible")

            setVisible2("visible");
            start()
            setStart2(true)
            console.log("start")
            if (lvl == 6) {
              setMousesize(10)
            } else if (lvl == 7) {
              setLightsize(5)
              setLight(true)
            }
            if(lvl == 20) {
              setVisible2("hidden")
              setVisible3("hidden")
              setVisible4("hidden")
              
            }
            
          } else if (index === 1 && visible2 == "visible") {
            setClicked2("public/redyes.png");
            setVisible3("visible");
            if (lvl == 6) {
              setMousesize(80)
            } else if (lvl == 7) {
              setLightsize(2.5)
            } else if (lvl == 12) {
              setElements("hidden")
            }
          } else if (index === 2 && visible3 == "visible") {
            setClicked3("public/redyes.png");
            setVisible4("visible");
            if (lvl == 6) {
              setMousesize(200)
            } else if (lvl == 7) {
              setLightsize(1.5)
            }

          } else if (index === 3 && visible4 == "visible") {
            setClicked4("public/redyes.png");
            setElements("hidden")
            setStart2(false)
            setLight(false)
            setMousesize(30)
            setElements2("hidden")
            setMulti(1)
            setElements3("hidden")
          } else if (index == 4) {
              setLvl(1)
              setVis1("visible")
              setVis3("none")

          } else if (index == 5) {
              
              setVis4("block");
              
              console.log("UKRYTY");

          } else if (index == 12) {
            setLight(false)
            setCheat(true)
            setLvl(1)
            console.log("2")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 13) {
            setLight(false)
            setCheat(true)
            setLvl(2)
            console.log("3")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 14) {
            setLight(false)
            setCheat(true)
            setLvl(3)
            console.log("4")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 15) {
            setLight(false)
            setCheat(true)
            setLvl(4)
            console.log("5")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 16) {
            setLight(false)
            setCheat(true)
            setLvl(5)
            console.log("6")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 17) {
            setLight(false)
            setCheat(true)
            setLvl(6)
            console.log("7")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 18) {
            setLight(false)
            setCheat(true)
            setLvl(7)
            console.log("8")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 19) {
            setLight(false)
            setCheat(true)
            setLvl(8)
            console.log("9")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 20) {
            setLight(false)
            setCheat(true)
            setLvl(9)
            console.log("10")
            setVis1("visible")
            setVis3("none")
          }
          else if (index == 21) {
            setLight(false)
            setCheat(true)
            setLvl(10)
            console.log("11")
            setVis1("visible")
            setVis3("none")
          }else if (index == 22) {
            setLight(false)
            setCheat(true)
            setLvl(11)
            console.log("12")
            setVis1("visible")
            setVis3("none")
          }else if (index == 23) {
            setLight(false)
            setCheat(true)
            setLvl(12)
            console.log("13")
            setVis1("visible")
            setVis3("none")
          }else if (index == 24) {
            setLight(false)
            setCheat(true)
            setLvl(13)
            console.log("14")
            setVis1("visible")
            setVis3("none")
          }else if (index == 25) {
            setLight(false)
            setCheat(true)
            setLvl(14)
            console.log("15")
            setVis1("visible")
            setVis3("none")
          }else if (index == 26) {
            setLight(false)
            setCheat(true)
            setLvl(15)
            console.log("16")
            setVis1("visible")
            setVis3("none")
          }else if (index == 27) {
            setLight(false)
            setCheat(true)
            setLvl(16)
            console.log("17")
            setVis1("visible")
            setVis3("none")
          }else if (index == 28) {
            setLight(false)
            setCheat(true)
            setLvl(17)
            console.log("18")
            setVis1("visible")
            setVis3("none")
          }else if (index == 29) {
            setLight(false)
            setCheat(true)
            setLvl(18)
            console.log("19")
            setVis1("visible")
            setVis3("none")
          }else if (index == 30) {
            setLight(false)
            setCheat(true)
            setLvl(19)
            console.log("20")
            setVis1("visible")
            setVis3("none")
          }
        }
      }
    });
  };













  useEffect(() => {
  buttonRefs.current = [];
}, [lvl,bosshp]);
//USTAWIANIE LVL
  useEffect(() => {
    if (
      (
      clicked1 === "public/redyes.png" &&
      clicked2 === "public/redyes.png" &&
      (clicked3 === "public/redyes.png" || buttons[2].dis == true) &&
      (clicked4 === "public/redyes.png" || buttons[3].dis == true)) || cheat
    ) {
      setLvl(prev => {
        const newLvl = prev + 1;

        setVisible2(cheat ? "visible" : "hidden")
        setVisible3(cheat ? "visible" : "hidden")
        setVisible4(cheat ? "visible" : "hidden")
        setFans([])
        setLight(false)
        switch (newLvl) {
          case 2:
            setMulti(1)
            setVis1("none");
            setVis2("block");
            setWalls([
              { left: "18.23vw", top: "0vh", width: "10.42vw", height: "80vh" },
              { left: "65.1vw", top: "0vh", width: "10.42vw", height: "80vh" },
              { left: "41.67vw", top: "20.12vh", width: "10.42vw", height: "80vh" },
            ])
            setButtons([
              {x:200,y:400,dis:false},
              {x:650,y:400,dis:false},
              {x:1100,y:400,dis:false},
              {x:1550,y:400,dis:false}
            ])
            break;
          case 3:
            setMulti(1)
            setWalls([
              { left: "18.23vw", top: "0vh", width: "5.21vw", height: "80vh" },
              { left: "18.23vw", top: "77.99vh", width: "72vw", height: "10.06vh" },
              { left: "85vw", top: "15.09vh", width: "5.21vw", height: "70.92vh" },
              { left: "44.27vw", top: "15.09vh", width: "45vw", height: "10.06vh" },
              { left: "41.67vw", top: "15.09vh", width: "5.21vw", height: "42vh" },
              { left: "41.67vw", top: "56.33vh", width: "30vw", height: "10.06vh" },
            ])
              setButtons([
                {x:935,y:465,dis:false},
                {x:935,y:680,dis:false},
                {x:935,y:50,dis:false},
                {x:935,y:880,dis:false}
              ])
            break;
          case 4:
            setSila(0.3)
            setMulti(1)
            setWalls([
              { left: "0.05vw", top: "-10.06vh", width: "100vw", height: "9.99vh" },
              { left: "18.23vw", top: "20.12vh", width: "7.81vw", height: "80vh" },
              { left: "54.69vw", top: "35.2vh", width: "7.81vw", height: "80vh" },
              { left: "54.69vw", top: "0vh", width: "7.81vw", height: "20vh" },
              { left: "54.69vw", top: "35.2vh", width: "15.63vw", height: "15.09vh" },
              { left: "54.69vw", top: "6.03vh", width: "52.08vw", height: "15.09vh" },
              { left: "36.46vw", top: "0vh", width: "7.81vw", height: "70vh" },
              { left: "36.46vw", top: "90.64vh", width: "7.81vw", height: "80vh" },
            ])
            
            setButtons([
              {x:200,y:400,dis:false},
              {x:560,y:400,dis:false},
              {x:910,y:400,dis:false},
              {x:1550,y:800,dis:false}

            ])


            break;
          case 5:
            setMulti(1)
            setSila(0.1)

            setWalls([
              { left: "0.05vw", top: "0vh", width: "100vw", height: "9.99vh" },
              { left: "0.05vw", top: "90.01vh", width: "100vw", height: "9.99vh" },
            ])
            setButtons([
            {x:200,y:400,dis:false},
            {x:650,y:600,dis:false},
            {x:1100,y:200,dis:false},
            {x:1550,y:800,dis:false}
            ])
            break;
            case 6:
              setMulti(1)
              setWalls([
                { left: "0.05vw", top: "-10.06vh", width: "100vw", height: "9.99vh" },
                { left: "18.23vw", top: "0vh", width: "7.81vw", height: "28vh" },
                { left: "18.23vw", top: "30.18vh", width: "7.81vw", height: "80vh" },
                { left: "28.65vw", top: "0vh", width: "7.81vw", height: "70vh" },
                { left: "28.65vw", top: "88.65vh", width: "7.81vw", height: "80vh" },
                { left: "66.67vw", top: "50.3vh", width: "36.46vw", height: "70.43vh" },
                { left: "54.69vw", top: "-5.13vh", width: "52.08vw", height: "15.09vh" },
                { left: "46.77vw", top: "50.3vh", width: "7.81vw", height: "80vh" },
                { left: "46.77vw", top: "0vh", width: "7.81vw", height: "9.99vh" },
              ])
              setButtons([
                {x:140,y:600,dis:false},
                {x:590,y:700,dis:false},
                {x:940,y:120,dis:false},
                {x:1150,y:900,dis:false}
              ])
              break;
            case 7:
              setMulti(1)
              setMousesize(30)
              setWalls([
                { left: "18.23vw", top: "0vh", width: "7.81vw", height: "50.30vh" },
                { left: "18.23vw", top: "65.43vh", width: "7.81vw", height: "50.30vh" },
                { left: "33.85vw", top: "65.43vh", width: "26.04vw", height: "15.09vh" },
                { left: "26.04vw", top: "95.97vh", width: "57.29vw", height: "15.09vh" },
                { left: "83.33vw", top: "45.26vh", width: "7.81vw", height: "55.18vh" },
                { left: "67.71vw", top: "30.18vh", width: "7.81vw", height: "50.30vh" },
                { left: "49.48vw", top: "15.09vh", width: "18.23vw", height: "15.09vh" },
                { left: "98.96vw", top: "30.18vh", width: "7.81vw", height: "80.89vh" },
                { left: "33.85vw", top: "0vh", width: "7.81vw", height: "30.18vh" },
                { left: "33.85vw", top: "45.26vh", width: "7.81vw", height: "30.18vh" },
                { left: "67.71vw", top: "0vh", width: "44.27vw", height: "30.18vh" }
              ])
              setButtons([
                { x: "5.21vw", y: "55.33vh", dis: false },
                { x: "59.89vw", y: "5.03vh", dis: false },
                { x: "28.13vw", y: "4.02vh", dis: false },
                { x: "92.97vw", y: "90.54vh", dis: false }
              ])
              
            break;
            case 8:
              
              setMulti(1)
              setWalls([
                { left: "18.23vw", top: "0vh", width: "10.42vw", height: "100.60vh" },
                { left: "39.06vw", top: "40.24vh", width: "10.42vw", height: "80.56vh" },
                { left: "28.65vw", top: "20.12vh", width: "62.50vw", height: "20.12vh" },
                { left: "39.06vw", top: "50.30vh", width: "62.50vw", height: "20.12vh" },
              ]);
              setWalls2([
                { left: "18.23vw", top: "0vh", width: "10.42vw", height: "70.44vh" },
                { left: "18.23vw", top: "50.30vh", width: "52.08vw", height: "20.12vh" },
                { left: "39.06vw", top: "20.12vh", width: "10.42vw", height: "90.54vh" },
                { left: "59.89vw", top: "0vh", width: "10.42vw", height: "100.60vh" },
                { left: "80.73vw", top: "0vh", width: "10.42vw", height: "100.60vh" },
              ]);
              
              setButtons([
                { x: "5.21vw", y: "43.26vh", dis: false },
                { x: "32.29vw", y: "10.06vh", dis: false },
                { x: "52.08vw", y: "80.56vh", dis: false },
                { x: "93.23vw", y: "10.06vh", dis: false },
              ]);
              
              break;
              case 9:
                setMulti(-1)
                setVis1("none");
                setVis2("block");
                setWalls([
                  { left: "18.23vw", top: "0vh", width: "10.42vw", height: "80.48vh" },
                  { left: "65.10vw", top: "0vh", width: "10.42vw", height: "80.48vh" },
                  { left: "41.67vw", top: "20.12vh", width: "10.42vw", height: "80.48vh" },
                ]);
                setButtons([
                  { x: "10.42vw", y: "40.24vh", dis: false },
                  { x: "32.81vw", y: "40.24vh", dis: false },
                  { x: "57.29vw", y: "40.24vh", dis: false },
                  { x: "78.23vw", y: "40.24vh", dis: false },
                ]);
                
                
                break;
                case 10:
                  setMulti(1)
                  setSila(0.1)
                  setWalls2([
                    { left: "16.41vw", top: "0vh", width: "9.38vw", height: "63.38vh" },
                    { left: "16.41vw", top: "54.33vh", width: "46.88vw", height: "9.05vh" },
                    { left: "35.16vw", top: "18.11vh", width: "9.38vw", height: "81.49vh" },
                    { left: "53.91vw", top: "0vh", width: "9.38vw", height: "100.60vh" },
                    { left: "72.66vw", top: "0vh", width: "9.38vw", height: "100.60vh" },
                    { left: "0vw", top: "0vh", width: "100vw", height: "0.90vh" },
                    { left: "0vw", top: "99vh", width: "100vw", height: "0.90vh" },
                  ]);
                  setButtons([
                    { x: "10.42vw", y: "40.24vh", dis: false },
                    { x: "29.43vw", y: "40.24vh", dis: false },
                    { x: "47.66vw", y: "40.24vh", dis: false },
                    { x: "93.49vw", y: "40.24vh", dis: false },
                  ]);
                  setWalls([
                    { left: "35.16vw", top: "18.11vh", width: "9.38vw", height: "81.49vh" },
                    { left: "16.41vw", top: "0vh", width: "9.38vw", height: "63.38vh" },
                    { left: "0vw", top: "0vh", width: "100vw", height: "0.90vh" },
                    { left: "0vw", top: "99vh", width: "100vw", height: "0.90vh" },
                  ]);
                  
                  break;
                case 11:
                  setWalls([
                  { left: 400, top: 0, width: 100, height: 300, dy: 2 ,up:true},
                  { left: 600, top: 0, width: 100, height: 300, dy: 5 ,up:true},
                  { left: 800, top: 0, width: 100, height: 300, dy: 7 ,up:true},
                  { left: 1000, top: 0, width: 100, height: 300, dy: 10 ,up:true},
                  { left: 1200, top: 0, width: 100, height: 300, dy: 12 ,up:true}, // dy = speed in Y
                  { left: 1400, top: 0, width: 100, height: 300, dy: 15 ,up:true},
                  { left: 0, top: 450, width: 300, height: 100, dy: 17 ,up:false},
                  ])
                  
                  setButtons([
                    { x: "10.42vw", y: "20.12vh", dis: false },
                    { x: "83.33vw", y: "80.56vh", dis: false },
                    { x: "83.33vw", y: "20.12vh", dis: false },
                    { x: "10.42vw", y: "80.56vh", dis: false },
                  ]);

                break;
                case 12:
                  setMulti(1)
                  setVis1("none");
                  setVis2("block");
                  setWalls([
                    {id: "wall1", left: "18.23vw", top: "20.12vh", width: "10.42vw", height: "80.48vh" },
                    {id: "wall2", left: "65.10vw", top: "20.12vh", width: "10.42vw", height: "80.48vh" },
                    {id: "wall3", left: "41.67vw", top: "0vh", width: "10.42vw", height: "80.48vh" },
                    {id: "wall4", left: "0vw", top: "98.39vh", width: "104.17vw", height: "2.01vh" },
                    {id: "wall5", left: "0vw", top: "0vh", width: "104.17vw", height: "2.01vh" },
                  ]);
                  setButtons([
                    { x: "10.42vw", y: "40.24vh", dis: false },
                    { x: "78.39vw", y: "40.24vh", dis: false },
                    { x: "10.42vw", y: "60.36vh", dis: false },
                    { x: "78.39vw", y: "40.24vh", dis: true },
                  ]);
                  
                  break;
                  case 13:
                    setMulti(1)
                    setVis1("none");
                    setVis2("block");
setWalls([
  {
    id: 'wall1',
    left: window.innerWidth * 0.1823,
    top: window.innerHeight * 0.2012,
    width: window.innerWidth * 0.1042,
    height: window.innerHeight * 0.8048
  },
  {
    id: 'wall2',
    left: window.innerWidth * 0.6510,
    top: window.innerHeight * 0.2012,
    width: window.innerWidth * 0.1042,
    height: window.innerHeight * 0.8048
  },
  {
    id: 'wall3',
    left: window.innerWidth * 0.4167,
    top: 0,
    width: window.innerWidth * 0.1042,
    height: window.innerHeight * 0.8048
  },
  {
    id: 'wall4',
    left: 0,
    top: window.innerHeight * 0.9839,
    width: window.innerWidth * 1.0417,
    height: window.innerHeight * 0.0201
  },
  {
    id: 'wall5',
    left: 0,
    top: 0,
    width: window.innerWidth * 1.0417,
    height: window.innerHeight * 0.0201
  }
]);

                    setWalls([
                      { left: 0, top: 0, width: "100vw", height: "5vh" },
                      { left: 0, top: "95vh", width: "100vw", height: "5vh" },
                      { left: 0, top: 0, width: "3vw", height: "100vh" },
                      { left: "97vw", top: 0, width: "3vw", height: "100vh" },
                      { left: "12vw", top: "15vh", width: "35vw", height: "70vh" },
                      { left: "53vw", top: "15vh", width: "35vw", height: "70vh" },

                    ])
                    setButtons([
                      { x: "5.21vw", y: "40.24vh", dis: false },
                      { x: "91.15vw", y: "40.24vh", dis: false },
                      { x: "48.18vw", y: "40.24vh", dis: false },
                      { x: "28.65vw", y: "10.06vh", dis: true },
                    ]);
                    break
                    
                    case 14:
                      setMulti(1)
                      setVis1("none");
                      setVis2("block");
                      setWalls([
                        { left: "0vw", top: "0vh", width: "100vw", height: "5.03vh" },
                        { left: "0vw", top: "94.97vh", width: "100vw", height: "5.03vh" },
                        { left: "0vw", top: "0vh", width: "3.13vw", height: "100vh" },
                        { left: "97.40vw", top: "0vh", width: "3.13vw", height: "100vh" },
                      ]);
                      
                      setButtons([
                        { x: "10.42vw", y: "40.24vh", dis: false },
                        { x: "33.85vw", y: "60.36vh", dis: false },
                        { x: "57.29vw", y: "20.12vh", dis: false },
                        { x: "80.73vw", y: "80.56vh", dis: false },
                      ]);
                      
                    break;
                    case 15:
                      
                      setIloscruchow(8)
                      setWalls([
  { id: 'w1', left: 400, top: 0, width: 100, height: 300, dy: 2, up: true },
  { id: 'w2', left: 600, top: 0, width: 100, height: 300, dy: 5, up: true },
  { id: 'w3', left: window.innerWidth * 0.6510, top: window.innerHeight * 0.1509, width: window.innerWidth * 0.2604, height: window.innerHeight * 0.7042 },
  { id: 'w4', left: 0, top: 0, width: window.innerWidth, height: window.innerHeight * 0.01 },
  { id: 'w5', left: 0, top: window.innerHeight * 0.1509, width: window.innerWidth * 0.8021, height: window.innerHeight * 0.0503 },
  { id: 'w6', left: 0, top: window.innerHeight * 0.9940, width: window.innerWidth, height: window.innerHeight * 0.01 },
  { id: 'w7', left: 0, top: 0, width: window.innerWidth * 0.0204, height: window.innerHeight },
  { id: 'w8', left: window.innerWidth * 0.9940, top: 0, width: window.innerWidth * 0.0104, height: window.innerHeight },
]);
                      setButtons([
                        { x: "10.42vw", y: "45.27vh", dis: false },
                        { x: "52.08vw", y: "45.27vh", dis: false },
                        { x: "93.75vw", y: "45.27vh", dis: false },
                        { x: "10.42vw", y: "7.04vh",  dis: false },
                      ]);
                      setFans([
                        { x: 1400, y: 850, sizex: 350, sizey: 150, strx: 0.1, stry: 0 },
                        
                        { x: 1750, y: 500, sizex: 200, sizey: 500, strx: -0.05, stry: -0.3 },
                        { x: 1750, y: 450, sizex: 200, sizey: 50, strx: -0.05, stry: 0.3 },

                      ])
                      console.log("Visibility:", elements, elements2);
                    break;
                    case 16:
setWalls([
  {
    id: 'wall1',
    left: window.innerWidth * 0.99,
    top: 0,
    width: window.innerWidth * 0.0104,
    height: window.innerHeight
  },
  {
    id: 'wall2',
    left: window.innerWidth * 0.2083,
    top: window.innerHeight * 0.3018,
    width: window.innerWidth * 0.0781,
    height: window.innerHeight * 0.3018
  },
  {
    id: 'wall3',
    left: window.innerWidth * 0.4167,
    top: window.innerHeight * 0.4024,
    width: window.innerWidth * 0.1563,
    height: window.innerHeight * 0.1509
  },
  {
    id: 'wall4',
    left: window.innerWidth * 0.7292,
    top: window.innerHeight * 0.2012,
    width: window.innerWidth * 0.0781,
    height: window.innerHeight * 0.8048
  }
]);

                      setFans([
                        { x: "0vw",    y: "0vh",    sizex: "25vw", sizey: "100vh", strx: 0.05, stry: 0 },
                        { x: "25vw",   y: "0vh",    sizex: "25vw", sizey: "100vh", strx: 0.10, stry: 0 },
                        { x: "50vw",   y: "0vh",    sizex: "25vw", sizey: "100vh", strx: 0.12, stry: 0 },
                        { x: "75vw",   y: "0vh",    sizex: "25vw", sizey: "100vh", strx: 0.15, stry: 0 },
                      ]);
                      setButtons([
                        { x: "5.21vw",  y: "50.30vh", dis: false },
                        { x: "20.83vw", y: "7.04vh",  dis: false },
                        { x: "52.08vw", y: "85.51vh", dis: false },
                        { x: "93.75vw", y: "45.27vh", dis: false },
                      ]);
                      console.log("Visibility:", elements, elements2);
                    break;
                    case 17:
setWalls([
  {
    id: 'w0',
    left: 0,
    top: 0,
    width: window.innerWidth,
    height: window.innerHeight * 0.0503
  },
  {
    id: 'w1',
    left: 0,
    top: window.innerHeight * 0.9497,
    width: window.innerWidth,
    height: window.innerHeight * 0.0503
  },
  {
    id: 'w2',
    left: 0,
    top: 0,
    width: window.innerWidth * 0.0313,
    height: window.innerHeight
  },
  {
    id: 'w3',
    left: window.innerWidth * 0.9740,
    top: 0,
    width: window.innerWidth * 0.0313,
    height: window.innerHeight
  },
  {
    id: 'w4',
    left: window.innerWidth * 0.7813,
    top: window.innerHeight * 0.2012,
    width: window.innerWidth * 0.0781,
    height: window.innerHeight * 0.8048
  },
  {
    id: 'w5',
    left: 0,
    top: window.innerHeight * 0.6036,
    width: window.innerWidth * 0.625,
    height: window.innerHeight * 0.1509
  },
  {
    id: 'w6',
    left: window.innerWidth * 0.1563,
    top: window.innerHeight * 0.2012,
    width: window.innerWidth * 0.625,
    height: window.innerHeight * 0.1509
  },
  {
    id: 'w7',
    left: 0,
    top: 350,
    width: 200,
    height: 125,
    dy: 2,
    up: false
  },
  {
    id: 'w8',
    left: 1700,
    top: 475,
    width: 200,
    height: 125,
    dy: 2,
    up: false
  }
]);

                      setFans([])
                      setButtons([
                        { x: "5.21vw",  y: "80.48vh", dis: false },
                        { x: "5.21vw",  y: "50.30vh", dis: false },
                        { x: "89.84vw", y: "85.51vh", dis: false },
                        { x: "89.84vw", y: "85.51vh", dis: true  },
                      ]);
                      console.log("Visibility:", elements, elements2);
                      break;
                    case 18:
                      setSila(0.2)
                      setWalls([
                        { left: 0, top: "98vh", width: 2000, height: "2vh" },
                        { left: 300, top: 0, width: 150, height: 200 },
                        { left: 300, top: 400, width: 150, height: 800 },
                        { left: 750, top: 0, width: 150, height: 600 },
                        { left: 750, top: 800, width: 150, height: 600 },



                      ])
                    setFans([
                      { x: 0, y: 500 ,sizex: 150, sizey: 800, strx: 0, stry: -0.2 },
                      { x: 450, y: 400 ,sizex: 150, sizey: 800, strx: 0, stry: -0.2 },
                      { x: 0, y: 0 ,sizex: 2000, sizey: 1, strx: 0, stry: 0 },
                      { x: 1050, y: 800 ,sizex: 150, sizey: 800, strx: 0, stry: -3 },
                      { x: 1550, y: 200 ,sizex: 200, sizey: 200, strx: 0, stry: -1 },

                                               


                    ])
                    setButtons([
                      {x:125,y:100,dis:false},
                      {x:675,y:700,dis:false},
                      {x:1625,y:150,dis:false},
                      {x:1725,y:850,dis:true},
                    
                    ])
                      break;
                    case 19:
                      setFans([])
          setWalls([
              { left: 1700, top: 475, width: 200, height: 125, dy: -1 ,up:false},

            ])
            break;
            case 20:
              setBosshp(500)
              setFans([])
              setWalls([
                { left: 0,     top: 0   ,  width: 2000,   height: 120 },
                { left: 0,     top: 880   ,  width: 2000,   height: 120 },
                
              ])
              break;

          default:
            break;
        }
        setClicked1("public/redno.png")
        setClicked2("public/redno.png")
        setClicked3("public/redno.png")
        setClicked4("public/redno.png")
  
        return newLvl;
      });
      setCheat(false)
    }
  }, [clicked1, clicked2, clicked3, clicked4,lvl]);
  const start = () => {
    
    if (lvl == 8 || lvl == 10 && start2) {
      if (elements == "hidden") {
        setElements("visible");
        setElements2("hidden")
      } else {
        setElements2("visible");
        setElements("hidden")
      }
    } else {
      setElements("visible")
    }
    if (lvl == 3) {
      setMulti(5)
    } else if (lvl == 9 ){
      setMulti(-1)
    } else {
      setMulti(1)
    }

  }
  const die = () => {
    wave3Ref.current = false
    setVelocity({x:0,y:0})
    if (lvl == 19) {
      setLight(false)
      setCheat(true)
      setLvl(18)
      console.log("19")
      setVis1("visible")
      setVis3("none")
    }
    if (lvl == 20) {
      setBosshp(500)
      setWave2(false)
      setWalls([])
      setGaster([])
      setElements2("hidden")
      setElements("hidden")
      setLight(false)
      setCheat(true)
      setLvl(19)
      console.log("20")
      setVis1("visible")
      setVis3("none")
    }
    if (lvl == 14) {
      setIloscruchow(5)
    } else if (lvl == 15){
      setIloscruchow(8)
    }
    setElements3("hidden")
    setClicked3("hidden")
    setElements("hidden")
    setClicked1("public/redno.png")
    setClicked2("public/redno.png")
    setClicked3("public/redno.png")
    setClicked4("public/redno.png")
    setVisible2("hidden")
    setVisible3("hidden")
    setVisible4("hidden")
    if (lvl != 9) {
      setMulti(1)
    }

    setStart2(false)
    setMousesize(30)
    setLight(false)
    setElements2("hidden")
    
  };






  return (
    <div className="App" style={{
      backgroundColor: elements2 == "visible" ? "#d4c4ca" : "#2b3b35",
      cursor: lvl == 0 ?  "auto" : "none"
    }}>
      {/* Click catcher */}
      <div
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10,
        }}
      />
{gaster.map((blaster, index) => (
  <div

    key={blaster.id}
    ref={(el) => (gasterRefs.current[index] = el)}
    className={"gasterblaster gaster-enter"}
    style={{
      
      height: blaster.height,
      width: blaster.width,
      position: "absolute",
      top: blaster.top,
      left: blaster.left,
      zIndex: 2,
    }}
  >
    <img
      style={{height:250,transform: blaster.rotate ?  "none" : "rotate(90deg)"}}
      src="public/gasteropen.png"
    />
  </div>
))}
      {/*WALLS */}
      {walls.map((wall, index) => (
  <div
    key= {lvl == 20 ? wall.id : index}
    ref={(el) => (wallRefs.current[index] = el)}
    className={wall.blaster ? "gaster-wall" : ""}
    style={{
      
      height: wall.height,
      width: wall.width,
      backgroundColor: wall.blaster ? "white" : wall.bullet ? 'grey' : 'red',
      visibility: elements,
      //visibility:  (bosshp < 300 && !wave2) ? "visible" : elements,
      position: "absolute",
      //opacity: elements == "visible" ? (bosshp < 300 && !wave2) ? 1 : 1 : 0.2,
      top: wall.top,
      left: wall.left,
      zIndex: 1,
    }}
  />
))}
          {walls2.map((wall2, index2) => (
      <div
        key={index2}
        ref={(el) => (wallRefs2.current[index2] = el)}
        style={{
          height: wall2.height,
          width: wall2.width,
          backgroundColor: "blue",
          visibility: elements2,
          //visibility: (bosshp < 300 &&  !wave2) ? "visible" : elements2,
         // opacity : elements2 == "visible" ? (bosshp < 300  && !wave2) ? 1 : 1 : 0.2,
          position: "absolute",
          top: wall2.top,
          left: wall2.left,
          zIndex: 1,
        }}
      ></div>
    ))}
{fans.map((fan, index) => (
  <div
    key={index}
    ref={(el) => (fanRefs.current[index] = el)}
    className="fan"
    style={{
      visibility: elements3,
      position: "absolute",
      left: fan.x,
      top: fan.y,
      width: fan.sizex,
      height: fan.sizey,
      background: "rgba(0, 0, 255, 0.3)",
    }}
  />
))}





















      {/* Buttons */}
      <button
        ref={el => buttonRefs.current[0] = el}
        
        style={{ 
          margin: 0,  visibility:lvl == 0 ? "hidden" : "visible" , zIndex: 2,
          position:"absolute",
          left: buttons[0].x,
          top: buttons[0].y,
          backgroundColor: elements2 == "visible" ? "#d4c4ca" : "#2b3b35",
          visibility: lvl == 0 ? "hidden" : "visible" 
        }}
        className='button'>

        <img className="btnimage" src={clicked1} />
      </button>

      <button
        ref={el => buttonRefs.current[1] = el}
        style={{ margin: 0,  visibility:lvl == 0 ? "hidden" : visible2 , zIndex: 2,
          position:"absolute",
          left:buttons[1].x,
          top: buttons[1].y,
          backgroundColor: elements2 == "visible" ? "#d4c4ca" : "#2b3b35",
          }}
        className='button'
      >
        <img className="btnimage" src={clicked2} />
      </button>

      <button
        ref={el => buttonRefs.current[2] = el}
        style={{ margin: 0, visibility:lvl == 0 ? "hidden" : visible3 , zIndex: 2,
          position:"absolute",
          left: buttons[2].x,
          top: buttons[2].y,
          backgroundColor: elements2 == "visible" ? "#d4c4ca" : "#2b3b35",
          
      }}
        className='button'
      >
        <img className="btnimage" src={clicked3} />
      </button>

      <button
        ref={el => buttonRefs.current[3] = el}
        style={{ margin: 0,  visibility:lvl == 0 ? "hidden" : visible4 , zIndex: 2,
          position:"absolute",
          left: buttons[3].x,
          top: buttons[3].y,
          backgroundColor: elements2 == "visible" ? "#d4c4ca" : "#2b3b35",
          }}
        className='button'
      >
        <img className="btnimage" src={clicked4} />
      </button>

      <div id='lvl1' style={{
        display: vis1,
        cursor: "none"
      }}>

      </div>
      <div id='lvl2' style={{
        display: vis2,
        cursor: "none"
      }}>


        
      </div>
      {/* Red wall */}


      {/* Fake cursor */}
      <img 
        id='cursor'
        src="public/cursor.png"
        alt="custom cursor"
        style={{
          width: mousesize,
          height:mousesize * 1.42 ,
          position: 'absolute',
          left: `${fakePosX}px`,
          top: `${fakePosY }px`,
          pointerEvents: 'none',
          zIndex: 9999,
          visibility: lvl == 0 ?  "hidden" : "visible"
        }}
      />
            <img 
        id='cursor2'
        src="public/cursor.png"
        style={{
          width: 200,
          height:200 * 1.42 ,
          position: 'absolute',
          left: `1600px`,
          top: `${bossY}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          visibility: lvl == 20 ?  "visible" : "hidden"
        }}
      />
<img
  id='light'
  src="public/light.png"
  alt="custom cursor"
  style={{
    visibility: light ? 'visible':'hidden' ,
    width: `calc(200vw * ${lightsize})`,
    height: `calc(200vh * ${lightsize})`,
    position: 'absolute',
    left: `${fakePosX + mousesize/2}px`,
    top: `${fakePosY + mousesize*0.71}px`,
    transform: 'translate(-50%, -50%)', // centers it around the cursor
    pointerEvents: 'none',
    zIndex: 9999,
  }}
/>
<div  style={{ display: vis3 , cursor:"auto"}}>
  <button 
  ref={el => buttonRefs.current[5] = el}

    style={{
      zIndex: 4,
      backgroundColor: "#2b3b35",
      margin: "auto",
      marginRight: "100px",
      border: "none"
    }}
  >
    <img id="logo" src="public/LOGO.png" alt="Logo" />
  </button>

  <br />

  <button
    ref={el => buttonRefs.current[4] = el}
    style={{
      zIndex: 4,
      backgroundColor: "#2b3b35",
      margin: "auto",
      marginRight: "100px",
      border: "none"
    }}
  >
    <img 
      src="public/redno.png"
      alt="Red No"
      style={{
        backgroundColor: "#2b3b35",
        margin: 0,
        height: 100
      }}
    />
  </button>
</div>

<div style={{
   display: vis4
}}>
  <button
  style={{
    padding:20
  }}
  ref={el => buttonRefs.current[12] = el}
  >2</button>
    <button
      style={{
        padding:20
      }}
  ref={el => buttonRefs.current[13] = el}
  >3</button>
    <button
      style={{
        padding:20
      }}
  ref={el => buttonRefs.current[14] = el}
  >4</button>
    <button
      style={{
        padding:20
      }}
  ref={el => buttonRefs.current[15] = el}
  >5</button>
    <button
      style={{
        padding:20
      }}
  ref={el => buttonRefs.current[16] = el}
  >6</button>
    <button
      style={{
        padding:20
      }}
  ref={el => buttonRefs.current[17] = el}
  >7</button>
    <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[18] = el}
  >8</button>
    <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[19] = el}
  >9</button>
    <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[20] = el}
  >10</button>
    <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[21] = el}
  >11</button>
    <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[22] = el}
  >12</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[23] = el}
  >13</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[24] = el}
  >14</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[25] = el}
  >15</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[26] = el}
  >16</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[27] = el}
  >17</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[28] = el}
  >18</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[29] = el}
  >19</button>
  <button
          style={{
            padding:20
          }}
  ref={el => buttonRefs.current[30] = el}
  >20</button>
</div>
<div id='HP' style={{
  backgroundColor: wave2 ?  "rgb(255, 136, 0)" : "rgb(151, 0, 0)",
  width:bosshp,
  height:50,
  visibility: lvl == 20 ? 'visible' : 'hidden',
left:`calc(34% + 5px)` ,
top: 15,
  position:"absolute",
  zIndex:9
}}></div>
<div id='HP' style={{
    visibility: lvl == 20 ? 'visible' : 'hidden',
  backgroundColor: "gray",
  width:500,
  height:50,
  zIndex:8,
  border: "black 5px solid",
  position:"absolute",
  left:"34%"
, top: 10
}}></div>
<h1
style={{
  
  position:"absolute",
  top:0,
  left:0
}} 
>{time/10}</h1>
<svg
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    width: '100vw',
    height: '100vh',
    zIndex: 1000, // above everything else
    visibility: start2 ? lvl == 14 || lvl == 15  ? "visible" : "hidden" : "hidden"
  }}
>
  <line
    x1={posX}
    y1={posY}
    x2={fakePosX+mousesize/2}
    y2={fakePosY + mousesize*0.71}
    stroke={`rgba(${Math.min(255, Math.floor(Math.sqrt((fakePosX - posX)**2 + (fakePosY - posY)**2)))}, ${255 - Math.min(255, Math.floor(Math.sqrt((fakePosX - posX)**2 + (fakePosY - posY)**2)))}, 0, 1)`}

    strokeWidth="10"
    
  />
</svg>
<h1 style={{
visibility: start2 ? lvl == 14 || lvl == 15 ? "visible" : "hidden" : "hidden"


}}>POZOSTAŁE RUCHU {iloscruchow}</h1>
<img src='public/nowifi.png' style={{
  height:200,
  zIndex:9995,

  visibility: lvl == 13 ? start2 ? "visible" : "hidden" : "hidden",
  position: "absolute",
  top:0,
  right:0
}}></img>
    </div>
  );
};

export default App;
