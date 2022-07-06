import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useDarkMode from '../useDarkMode'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import Logo from '../public/assets/logo.png'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Nav = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const [colorTheme, setTheme] = useDarkMode()

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl shadow-teal-200 z-[100] ease-in-out duration-300'
					: 'fixed w-full h-20 z-[100] shadow-xl'
			}
		>
			<div className='dark:bg-gray-700'>
				{colorTheme === 'light' ? (
					<svg
						onClick={() => setTheme('light')}
						xmlns='http://www.w3.org/2000/svg'
						className='h-10 w-10  text-gray-200'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
						/>
					</svg>
				) : (
					<svg
						onClick={() => setTheme('dark')}
						xmlns='http://www.w3.org/2000/svg'
						className='h-10 w-10 text-gray-800'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					</svg>
				)}
				<div className='flex items-center justify-between w-full h-full px-10 2xl:px-16'>
					<Link href='/'>
						<a>
							<Image
								src={Logo}
								alt='logo'
								width='125'
								height='75'
								className='cursor-pointer'
							/>
						</a>
					</Link>
					<div>
						<ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
							<Link href='/'>
								<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b'>
									Contact
								</li>
							</Link>
						</ul>
						<div
							style={{ color: `${linkColor}` }}
							onClick={handleNav}
							className='md:hidden'
						>
							<AiOutlineMenu size={25} />
						</div>
					</div>
				</div>

				<div
					className={
						nav
							? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
							: ''
					}
				>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
						}
					>
						<div>
							<div className='flex w-full items-center justify-between'>
								<Link href='/'>
									<Image src={Logo} width='100' height='100' alt='logo' />
								</Link>
								<div
									onClick={handleNav}
									className='p-2 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110'
								>
									<AiOutlineClose />
								</div>
							</div>
							<div className='border-b border-teal-200 my-4'>
								<p className='w-[85%] md:w-[90%] py-4'>
									Let&apos;s build something sick together
								</p>
							</div>
						</div>
						<div>
							<ul className='py-4 flex flex-col'>
								<Link href='/'>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm border-teal-200 hover:border-b'
									>
										Home
									</li>
								</Link>
								<Link href='/#about'>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm border-teal-200 hover:border-b'
									>
										About
									</li>
								</Link>
								<Link href='/#skills'>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm border-teal-200 hover:border-b'
									>
										Skills
									</li>
								</Link>
								<Link href='/#projects'>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm border-teal-200 hover:border-b'
									>
										Projects
									</li>
								</Link>
								<Link href='/#contact'>
									<li
										onClick={() => setNav(false)}
										className='py-4 text-sm border-teal-200 hover:border-b'
									>
										Contact
									</li>
								</Link>
							</ul>
							<div className='pt-40'>
								<p className='uppercase tracking-widest text-teal-400'>
									Let&apos;s Connect
								</p>
								<div className='flex items-center justify-between my-4  w-full sm:w-[80%]'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaLinkedinIn />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
										<a href='https://twitter.com/kmal808'>
											<FaTwitter />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
