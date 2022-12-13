import kaboom from "kaboom";

// initialize context
kaboom({
  background:[200,200,200],
  width: 640,
  height: 480
});
let highest =0;
let score = 0;
let redGreen =0;
let lvl=0;

add([
  text("Spacebar.io Competitive",{
    size:40,
  }),
  pos(30,5),
  color(250,250,250),
  "urmum",
])
add([
      text("\nPress enter or the space bar to start. \n \n" + "If the color of your score turns red, press enter or your score will be reset. But spamming enter will leave you wondering where your points went... \n \n" + "Earn as many points as  quickly as possible with the space bar." , {
        size: 30, 
        width: 500,
      }),
      origin("center"),
      pos(center()),
      color(250,250,250),
      "urmum",
        ])
onKeyPress("i" ,() =>{
  destroyAll("text")

  add([
      text("Press enter or the space bar to continue. \n \n" + "If the color of your score turns red, press enter to get it back to green. Pressing enter while your score is green will reset it. \n \n" + "Earn as many points as  quickly as possible with the space bar." , {
        size: 30, 
        width: 500,
      }),
      origin("center"),
      pos(center()),
      color(250,250,250),
      "urmum",
        ])
  if(redGreen>9){
        add([
          text(score, {
            size: 30,
            font: "sinko",
          }),
          origin("center"),
          pos(45,240),
          color(200,0,0),
          "urmum",
          ])
  }else{
    add([
          text(score, {
            size: 30,
            font: "sinko",
          }),
          origin("center"),
          pos(45,240),
          color(0,200,0),
          "urmum",
          ])}
  lvl= Math.floor((score+1)/10),
  add([
        text("Level: " + lvl,{
          size: 40,
          font: "sinko",
        }),
        
        pos(0,0),
        "lvl",
      ])
})
onKeyPress("space", () =>{
  if(lvl>highest){highest =lvl;}
  onUpdate(
  destroyAll("text"),
    
    lvl= Math.floor((score+1)/10),
  add([
        text("Level: " + lvl,{
          size: 50,
          font: "sinko",
        }),
        
        pos(0,0),
        "lvl",
      ]),
)
  if(lvl>highest){highest =lvl;}
  add([
          text("Highest Level:" + highest, {
            size: 50,
            font: "sinko",
          }),
          pos(0,50),
          "high",
        ])
  add([
      text("Press i for instructions", {
        size: 20,
        font: "sinko",
      }),
      pos(5,460),
      "ins",
    ])
    if(redGreen>9){
      if(lvl>highest){highest =lvl;}
      add([
          text("Highest Level:" + highest, {
            size: 50,
            font: "sinko",
          }),
          pos(0,50),
          "high",
        ])
      score = 0;
      redGreen = 0;
      add([
          text(score, {
            size: 70,
            font: "sinko",
          }),
          origin("center"),
          pos(center()),
          color(0,200,0),
          "urmum",
          ])
    }else{
      score= score + 1
      redGreen=rand(10)
      if(redGreen>9){
        add([
          text(score, {
            size: 70,
            font: "sinko",
          }),
          origin("center"),
          pos(center()),
          color(200,0,0),
          "urmum",
          ])
      }else{
        add([
          text(score, {
            size: 70,
            font: "sinko",
          }),
          origin("center"),
          pos(center()),
          color(0,200,0),
          "urmum",
          ])
      }
    }
  })
 
onKeyPress("enter", () =>{
  destroyAll("urmum")
  destroyAll("lvl")
  if(lvl>highest){highest =lvl;}
  onUpdate(
  destroyAll("lvl"), 
    lvl= Math.floor((score+1)/10),
  add([
        text("Level: " + lvl,{
          size: 50,
          font: "sinko",
        }),
        pos(0,0),
        "lvl",
      ]),
      add([
          text("Highest Level:" + highest, {
            size: 50,
            font: "sinko",
          }),
          pos(0,50),
          "high",
        ]),
)
      if (redGreen>9){
      score = score +2
      redGreen =0
      destroyAll("text")
      if(lvl>highest){highest =lvl;}
        add([
          text("Highest Level:" + highest, {
            size: 50,
            font: "sinko",
          }),
          pos(0,50),
          "high",
        ])
      add([
        text("Press i for instructions", {
          size: 20,
          font: "sinko",
        }),
        pos(5,460),
        "ins"
      ])
      add([
        text(score, {
          size: 70,
          font: "sinko",
        }),
        origin("center"),
        pos(center()),
        color(0,200,0),
        "urmum",
        ])
        if(score % 10 === 0){
          lvl= Math.floor((score+1)/10)
        }
        add([
        text("Level: "+lvl,{
          size:50,
          font: "sinko",
        }),
        pos(0,0),
        "lvl",
          ])
      }else{
        if(lvl>highest){highest =lvl;}
        add([
          text("Highest Level:" + highest, {
            size: 50,
            font: "sinko",
          }),
          pos(0,50),
          "high",
        ])
        destroyAll("urmum")
         add([
          text("Press i for instructions", {
            size: 20,
            font: "sinko",
          }),
          pos(5,460),
        "ins"
        ])
        score=0
        add([
          text(score, {
            size: 70,
            font: "sinko",
          }),
          origin("center"),
          pos(center()),
          color(0,200,0),
          "urmum",
          ])
      }
  })