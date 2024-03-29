// script.js

const adviceArray = [
  "How to teach your pet rock to dance: Play some music and wait for the magic!",
  "To find buried treasure, start by digging in your backyard. Pirates often get lost.",
  "Want to become a professional procrastinator? Put off making that decision until later.",
  "To make your computer run faster, paint flames on the side. It's a well-known fact that flames add speed!",
  "If life gives you lemons, ask for tequila and salt.",
  "To stay young forever, try reverse aging by celebrating your birthdays in reverse order.",
  "If you ever get lost in a forest, just hug a tree and introduce yourself. Trees are excellent conversation partners.",
  "How to teach your pet rock to dance: Play some music and wait for the magic!",
  "To find buried treasure, start by digging in your backyard. Pirates often get lost.",
  "Want to become a professional procrastinator? Put off making that decision until later.",
  "To make your computer run faster, paint flames on the side. It's a well-known fact that flames add speed!",
  "If life gives you lemons, ask for tequila and salt.",
  "To stay young forever, try reverse aging by celebrating your birthdays in reverse order.",
  "If you ever get lost in a forest, just hug a tree and introduce yourself. Trees are excellent conversation partners.",
  "To make your car fly, simply attach a helium balloon to the roof, you'll be cruising through the skies in no time!",
  "To become a professional mime, practice speaking louder in your head, your invisible audience will appreciate it.",
  "To find your keys faster, try closing your eyes and using your 'inner vision', your keys will practically jump into your hand!",
  "To become a millionaire overnight, play the lottery with your monopoly money, the odds are just as good!",
  "To become a better swimmer, just add a snorkel to your morning coffee routine, you'll be breathing underwater in no time.",
  "If you want to be more punctual, set your clocks ahead by five hours, you'll always arrive early, according to your unique time zone!",
  "To make your plants grow faster, give them motivational speeches every morning, they thrive on positivity!",
  "To become a culinary expert, just add 'gourmet' in front of everything you cook, gourmet microwave popcorn, anyone?",
  "If you're feeling tired, take a nap while standing in the shower, multitasking at its finest!",
  "To become a better chef, always cook with your eyes closed, it heightens your other senses and adds a dash of excitement to your meals!",
  "To improve your memory, forget everything you know and start fresh, it's a clean slate for a brighter future!",
  "If you want to be a better driver, pretend you're in a high-speed chase every time you hit the road, your adrenaline will keep you alert!",
  "To find the love of your life, create a spreadsheet of all potential partners and assign them numerical scores, love is just a math problem waiting to be solved!",
  "To become a better dancer, just add a strobe light to your morning routine, you'll be a dancing machine in no time!",
  "To become a better writer, just add 'according to my sources' to the end of every sentence, it makes you sound super smart!",
  "To save time on brushing your teeth, use a paint roller. Cover all your teeth in one go!",
  "To become a better basketball player, replace the basketball with a watermelon. It will improve your dribbling skills!",
  "To keep your houseplants hydrated, give them energy drinks instead of water. They'll grow up to be strong and caffeinated.",
  "To make your neighbors think you're a genius, carry around a clipboard everywhere you go. People trust clipboard holders.",
  "To become a master chef, just microwave everything for 10 minutes. Voilà, instant gourmet!",
  "To increase your phone's battery life, charge it in the freezer. Cold electrons move faster!",
  "To become a famous artist, draw stick figures and claim they're avant-garde masterpieces. Art is subjective, after all.",
  "To become a better writer, use as many big words as possible, even if they don't make sense. It's all about flaunting your lexicon!",
  "To save money on groceries, only eat in your dreams. Dream food is calorie-free and costs nothing!",
  "To make your dog a math genius, teach it calculus. Dogs have hidden math talents, you know.",
  "To become a better swimmer, practice in a bathtub. You'll be ready for the ocean in no time!",
  "To become a professional superhero, wear your underwear on the outside. Instant transformation!",
  "To win any argument, just yell 'I'm right!' repeatedly until the other person gives up. It's called the 'vocal knockout' technique.",
  "To become a better musician, play the triangle and claim it's the most essential instrument in the orchestra.",
  "To catch a squirrel, think like a nut. Squirrels will find you irresistible!",
  "To become a better golfer, use a hockey stick instead of a golf club. It's all about surprise tactics!",
  "To be the life of the party, bring a bag of balloons. Pop them randomly to keep the excitement going.",
  "To impress your boss, send them an email with a subject line in Wingdings font. It shows you're avant-garde in communication.",
  "To find your way home, leave a trail of breadcrumbs everywhere you go. It worked for Hansel and Gretel!",
  "To make your plants grow taller, play them motivational speeches by NBA coaches. They'll reach for the stars!",
  "To become a famous detective, solve imaginary crimes. You'll be known as the Sherlock of daydreams.",
  "To become a morning person, set your alarm for 3 AM and then hit snooze repeatedly. You'll wake up eventually, feeling victorious!",
  "To get more likes on social media, post pictures of your pet rock doing extreme sports. Rock climbing, anyone?",
  "To become a better public speaker, practice in front of your mirror. It's your most critical audience.",
  "To become a fashion icon, wear mismatched socks and call it 'eccentric sock couture.'",
  "To save money on gas, put rollerblades on your car tires. Zoom down the road in style!",
  "To make your cat exercise, attach a laser pointer to its tail. Hours of entertainment for both of you!",
  "To make your computer virus-proof, cover it in garlic. Viruses hate the smell.",
  "To become a spelling bee champion, make up your own words and insist they're real. The judges will be in awe of your creativity!",
  "To become a professional mime, perform an invisible tightrope act on your way to work. Commuters will applaud your silent bravery.",
  "To become a pro surfer, practice on your ironing board. It's all about balance!",
  "To become a famous painter, paint your entire house. You'll have a masterpiece to live in!",
  "To become a mind reader, wear aluminum foil on your head. It enhances psychic reception.",
  "To become a better chef, cook everything in the dishwasher. It's a one-stop culinary solution!",
  "To save on electricity, only turn on the lights when you're not home. The bills will practically disappear!",
  "To become a cat whisperer, meow at random cats on the street. They'll reveal their deepest secrets.",
  "To become a better driver, use a bicycle horn in your car. It's both amusing and attention-grabbing.",
  "To become a rocket scientist, watch a lot of sci-fi movies. Hollywood has all the answers!",
  "To become a better gardener, serenade your plants with heavy metal music. They love a good headbang!",
  "To become a fashion trendsetter, wear your clothes backward. It's the new 'reverse chic.'",
  "To become a professional gamer, tape extra controllers to your body. You'll have more buttons to press!",
  "To become a famous author, write your novel on a roll of toilet paper. It's the ultimate 'scroll'.",
  "To become a better cook, use a flamethrower instead of a stovetop. Fire is the key to flavor!",
  "To become a better photographer, take pictures with your eyes closed. It adds an element of surprise.",
  "To become a better comedian, tell jokes in a foreign language. Laughter is universal!",
  "To become a world traveler, spin a globe and then go to the nearest place you point to. Adventure awaits!",
  "To become a better gardener, plant your vegetables in a sandbox. It's like a beach vacation for your veggies.",
  "To become a famous actor, rehearse your lines in front of your pet fish. They're great at silent critique.",
  "To become a better scientist, perform experiments in your bathtub. It's a controlled environment!",
  "To become a pro athlete, wear roller skates during your morning jog. Speed and style combined!",
  "To become a famous chef, serve microwave dinners at a five-star restaurant. It's all about presentation!",
  "To become a better dancer, practice your moves in an elevator. The confined space will enhance your skills!",
  "To become a better painter, use a broom as your brush. Sweep away your artistic doubts!",
  "To become a famous musician, play air guitar on the subway. Commuters will love your impromptu concert!",
  "To become a better fisherman, fish in your bathtub. It's like a personal aquarium!",
  "To become a renowned poet, write your verses on napkins and leave them at fast food restaurants. Instant literary fame!",
  "To become a better mechanic, fix your car blindfolded. It's all about the tactile experience!",
  "To become a famous filmmaker, shoot your masterpiece on a smartphone in selfie mode. It's avant-garde cinema!",
  "To become a better pilot, practice flying paper airplanes indoors. It's a safe way to soar!",
  "To become a professional artist, paint with spaghetti noodles. Your work will be truly al dente!",
  "To become a renowned architect, build a cardboard skyscraper. It's the future of eco-friendly design!",
  "To become a better astronaut, stargaze from your backyard while wearing a space helmet. The universe is your oyster!",
  "To become a famous psychic, predict the weather based on your pet's mood. Fido knows all!",
  "To become a better detective, solve mysteries in your dreams. Dreamland is the ultimate crime scene!",
  "To become a world-renowned historian, make up historical events and insist they happened. Who's to prove you wrong?",
  "To become a better inventor, create a time machine out of cardboard boxes. Time travel on a budget!",
  "To become a famous magician, practice your tricks with invisible cards. No one will see it coming!",
  "To become a better linguist, create your own language and only speak it to your pet rock. It's a secret bond!",
  "To become a professional rock climber, scale the walls of your own home. Indoor adventure awaits!",
  "To become a better photographer, take selfies in the mirror with a disposable camera. Vintage vibes!",
  "To become a famous archaeologist, dig up your backyard and declare it an ancient burial site. Unearth your own treasures!",
  "To become a better actor, perform Shakespearean soliloquies in the shower. You'll sound amazing!",
  "To become a renowned fashion designer, create outfits from aluminum foil. It's the future of haute couture!",
  "To become a better swimmer, practice in a kiddie pool with floaties on your arms. Water wings are the key to aquatic success!",
  "To become a famous astronaut, wear a spacesuit to work and insist you're on a mission to Mars. Your coworkers will admire your dedication!",
  "To become a better geologist, collect rocks from your driveway and call them 'space minerals.' You're now a cosmic scientist!",
  "To become a professional acrobat, do cartwheels in your living room. Furniture is just an obstacle course!",
  "To become a famous meteorologist, predict the weather by checking the color of your cat's fur. Fluffy clouds mean rain!",
  "To become a better comedian, practice your stand-up routine in the produce section of the grocery store. It's a ripe audience!",
  "To become a world-class diplomat, resolve international conflicts with a game of rock-paper-scissors. Simple solutions for complex problems!",
  "Master the art of overthinking: Spend hours contemplating the meaning of life, the universe, and everything, without ever reaching a conclusion.",
  "Become a professional couch potato: Perfect your binge-watching skills and aim to break the world record for the most hours spent on a couch in a single day.",
  "Avoid learning anything new: Stick to your comfort zone and never venture into the realms of knowledge or new experiences.",
  "Embrace negativity: Complain about everything, from the weather to your favorite TV shows. Pessimism is your new best friend.",
  "Ignore your passions: Instead of pursuing your dreams and hobbies, dedicate your time to mindlessly scrolling through social media.",
  "Develop a terrible sense of humor: Share jokes that only you find funny, and laugh loudly at your own puns, no matter how cringe-worthy they may be.",
  "Master the art of overcomplicating simple tasks: Turn even the simplest tasks, like making a sandwich, into an elaborate and time-consuming process.",
  "Collect useless objects: Fill your living space with trinkets and knick-knacks that serve no purpose other than taking up space.",
  "Cultivate bad habits: Make sure to pick up as many unhealthy and counterproductive habits as possible. The more, the merrier!",
  "Avoid personal growth: Never reflect on your actions, learn from your mistakes, or set goals for self-improvement.",
  "Live in the past: Continuously dwell on past regrets and missed opportunities, while neglecting the present and future.",
  "Follow the crowd blindly: Always conform to societal norms and never question the status quo.",
];

const randomTipElement = document.getElementById("random-tip");
const generateTipButton = document.getElementById("generate-tip");

function getRandomAdvice() {
  const randomIndex = Math.floor(Math.random() * adviceArray.length);
  const randomAdvice = adviceArray[randomIndex];
  randomTipElement.textContent = randomAdvice;
}

generateTipButton.addEventListener("click", getRandomAdvice);
