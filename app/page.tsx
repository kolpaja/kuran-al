import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex justify-center items-center pt-20 flex-col gap-6'>
			<Image src='/img/quran.jpg' alt='quran' className='rounded-full p-1' width={500} height={800} />
			<h1 className='text-3xl font-bold'>Kuran.al vjen se shpejti</h1>
		</div>
	);
}
