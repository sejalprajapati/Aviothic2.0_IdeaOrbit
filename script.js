// Scroll buttons
document.getElementById('exploreSolutionsBtn').addEventListener('click', () => {
  document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('exploreFeaturesBtn').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
