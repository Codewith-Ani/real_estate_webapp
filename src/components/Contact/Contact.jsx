import React, { useEffect, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import ContactImg from '../../assets/images/contact.jpg';
import { BsEnvelope, BsPerson } from 'react-icons/bs';

const Contact = () => {
	useEffect(() => {
		AOS.init({
			offset: 100,
			delay: 800,
			duration: 1000,
			easing: 'ease',
		});
	}, []);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_cois6vs',
				'template_nezbmix',
				form.current,
				'dt48432fCrysnYAET'
			)
			.then(
				() => {
					Swal.fire({
						title: 'Success!',
						text: 'Your email has been sent.',
						icon: 'success',
						confirmButtonText: 'OK',
					});
					form.current.reset(); // Reset form after success
				},
				(error) => {
					Swal.fire({
						title: 'Error!',
						text: `Failed to send email: ${error.text}`,
						icon: 'error',
						confirmButtonText: 'OK',
					});
				}
			);
	};

	return (
		<section
			className='c-wrapper'
			id='contact-form'
		>
			<div
				className='flexCenter innerWidth paddings c-container'
				data-aos='fade-in'
			>
				{/* Left Side */}
				<div className='flexColStart c-left'>
					<span className='orangeText'>Our Contacts</span>
					<span className='primaryText'>Easy to Contact Us</span>
					<span className='secondaryText'>
						We are always ready to help by providing the best
						services for you. We believe a good balance in life can
						make your life better.
					</span>

					<form
						data-aos='fade-in'
						data-aos-duration='800'
						data-aos-delay='600'
						className='flexColStart contactModes'
						ref={form}
						onSubmit={sendEmail}
					>
						<section className='searchBar'>
							<div className='flexStart'>
								<BsPerson size={30} />
								<input
									className='customInput'
									type='text'
									name='from_name'
									placeholder='Enter your Name'
									required
								/>
							</div>

							<div className='flexStart'>
								<BsEnvelope size={30} />
								<input
									className='customInput'
									type='email'
									name='from_email'
									placeholder='Enter your Email'
									required
								/>
							</div>
							<div>
								<textarea
									rows={5}
									name='message'
									className='customInput'
									placeholder='Enter message'
									required
								></textarea>
							</div>
							<span>
								<button
									type='submit'
									className='button custombutton'
								>
									Send Email
								</button>
							</span>
						</section>
					</form>
				</div>
				{/* Right Side */}
				<div className='c-right flexEnd'>
					<div
						className='img-container'
						data-aos='fade-left'
						data-aos-duration='800'
						data-aos-delay='600'
					>
						<img
							src={ContactImg}
							alt='Contact'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
