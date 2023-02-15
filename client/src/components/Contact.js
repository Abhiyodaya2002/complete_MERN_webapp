import React from 'react'
import "./contact.css"
function Contact() {
  return (
   <>


<div class="content">
	<div class="contact">
		<div class="other">
			
		</div>
		<div class="form">
			<h1>Get In Touch</h1>
			<form action="">
				<div class="flex-rev">
					<input type="text" placeholder="Your name" name="name" id="name" />
					<label for="name">Full Name</label>
				</div>
				<div class="flex-rev">
					<input type="email" placeholder="Your email" name="email" id="email" />
					<label for="email">Your Email</label>
				</div>
        <div class="flex-rev">
					<input type="phone" placeholder="Your Phone" name="phone" id="phone" />
					<label for="phone">Your Phone</label>
				</div>

				<div class="flex-rev">
					<textarea placeholder="I have an idea for a project...." name="message" id="message" />
					<label for="message">Email Message</label>
				</div>
				<button>Send Email</button>
			</form>
		</div>
	</div>
</div>
   </>
  )
}

export default Contact
