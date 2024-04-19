const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {moo,neigh,baa,oink,cluck} = {
  moo:'cow',
neigh:'horse',
baa: 'sheep',
oink: 'pig',
cluck:'chicken'
};
 
console.log(moo);
const{ bessie, babe, little,dolly}={
  bessie:'cow',
  babe:'pig',
  little:'chicken',
  dolly:'sheep'
}
console.log(bessie)


const{pink,blackAndWhite,black}={

  pink:'pig',

  

 blackAndWhite:'cow',
  black:'sheep'
}
const{red,orange,yellow,green,blue,indigo,violet}={
  red: 'red',
  orange:'orange',
  yellow:'yellow',
  green:'green',
  blue:'blue',
  indigo:'indigo',
  violet:'violet'
}
const{r,o,y,g,b,i,v}={
  r:'red',
  o:'orange',
  y:'yellow',
  g:'green',
  b:'blue',
  i:'indigo',
  v:'violet'
}
const {indg}={
  indg:indigo
}

const{muppetName,color,song,job,partner}=muppetName

console.log(muppetName);
console.log(color);
console.log(song);
console.log(job);
console.log(partner)

const{song2,song4, nestedPartner,nestedJob}=nestedMuppet
console.log(song2)
console.log(song4)


console.log(nestedJob)
console.log(nestedPartner)





// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner