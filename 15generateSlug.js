function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

console.log(generateSlug("Hello World.com")); 
console.log(generateSlug("Alma Better, Webday.com"));