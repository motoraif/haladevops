---
layout: page
title: Contact
permalink: /contact/
---

<form action="https://formspree.io/f/{your_form_id}" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <input type="hidden" name="_next" value="/thank-you.html">
  
  <button type="submit">Send</button>
</form>
