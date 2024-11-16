 // Form elements ko select karna
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const skillsInput = document.getElementById('skills');
 // Preview elements ko select karna
 const previewName = document.getElementById('preview-name');
 const previewEmail = document.getElementById('preview-email');
 const previewSkills = document.getElementById('preview-skills');
 // Event listeners lagaye gaye hain taki form ka data change hotay hi preview update ho
 nameInput.addEventListener('input', () => {
     previewName.textContent = nameInput.value || "Your Name";
 });
 emailInput.addEventListener('input', () => {
     previewEmail.textContent = emailInput.value || "Your Email";
 });
 skillsInput.addEventListener('input', () => {
     previewSkills.textContent = skillsInput.value || "Your Skills";
 });
cript>
</body>
</html>