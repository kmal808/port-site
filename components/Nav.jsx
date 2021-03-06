import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import Logo from '../public/assets/default.png'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Nav = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	// const [navBg, setNavBg] = useState('#ecf0f3')
	// const [linkColor, setLinkColor] = useState('#1f2937')

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
			// style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 bg-[#e4e8eb] dark:bg-slate-600 shadow-lg shadow-teal-200 z-[100] ease-in-out duration-300'
					: 'fixed w-full h-20 bg-[#e4e8eb] z-[100] dark:bg-slate-600 shadow-xl'
			}
		>
			<div className='flex items-center justify-between w-full h-full px-10 2xl:px-16'>
				<ThemeSwitch />
				{/* <Link href='/'>
					<a>
						<Image
							src={Logo}
							alt='logo'
							width='125'
							height='75'
							className='cursor-pointer'
						/>
					</a>
				</Link> */}
				<div>
					<ul
						/** style={{ color: `${linkColor}` }}  */ className='hidden md:flex dark:text-slate-200'
					>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b cursor-pointer'>
								Home
							</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b cursor-pointer'>
								About
							</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b cursor-pointer'>
								Skills
							</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b cursor-pointer'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase border-teal-200 hover:border-b cursor-pointer'>
								Contact
							</li>
						</Link>
					</ul>
					<div
						/** style={{ color: `${linkColor}` }} */
						onClick={handleNav}
						className='md:hidden dark:text-slate-200'
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] dark:bg-slate-700 p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<ThemeSwitch />
							<div
								onClick={handleNav}
								className='p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'
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
									className='py-4 text-sm border-teal-200 hover:border-b cursor-pointer'
								>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm border-teal-200 hover:border-b cursor-pointer'
								>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm border-teal-200 hover:border-b cursor-pointer'
								>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm border-teal-200 hover:border-b cursor-pointer'
								>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm border-teal-200 hover:border-b cursor-pointer'
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
	)
}

export default Nav
