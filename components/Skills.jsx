import React from 'react'
import Image from 'next/image'

const Skills = () => {
	return (
		<div id='skills' className='w-full p-2 lg:h-screen'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest text-teal-500 uppercase'>
					Skills
				</p>
				<h2 className='py-4'>What I Can Do</h2>

				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/css.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/html.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/javascript.png?raw=true'
									width='64px'
									height='64px'
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/node.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Node.JS</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='
                  https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Next.JS</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/react.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/github1.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/node.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Express</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/mongo.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>

					<div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid items-center justify-center grid-cols-2 gap-4'>
							<div className='m-auto'>
								<Image
									src='https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true'
									width='64px'
									height='64px'
									alt='github'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Bootstrap</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
