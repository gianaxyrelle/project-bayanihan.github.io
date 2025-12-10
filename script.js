
// Basic interactive behavior for the Project Bayanihan demo site

// Simple impact numbers (you should update these with your real numbers)
const impact = {
  schools: 4,
  students: 183,
  supplies: 420,
  volunteers: 12
};

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('schools-count').textContent = impact.schools;
  document.getElementById('students-count').textContent = impact.students;
  document.getElementById('supplies-count').textContent = impact.supplies;
  document.getElementById('volunteers-count').textContent = impact.volunteers;

  const form = document.getElementById('volunteer-form');
  const mailtoBtn = document.getElementById('mailto-btn');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;
    const message = document.getElementById('message').value.trim();
    const body = encodeURIComponent(
      `Volunteer request from ${name} (${email})\n\nRole: ${role}\n\nMessage:\n${message}`
    );
    // open mail app with prefilled content (no external platform required)
    window.location.href = `mailto:projectbayanihan@example.com?subject=Volunteer%20Request%20from%20${encodeURIComponent(name)}&body=${body}`;
    // also copy to clipboard
    const summary = `Volunteer request from ${name} (${email})\nRole: ${role}\nMessage: ${message}`;
    navigator.clipboard?.writeText(summary).catch(()=>{});
    alert('A volunteer email draft was opened in your email app. The message was also copied to your clipboard.');
    form.reset();
  });

  mailtoBtn.addEventListener('click', ()=>{
    window.location.href = 'mailto:projectbayanihan@example.com?subject=Interested%20in%20Volunteering';
  });
});
