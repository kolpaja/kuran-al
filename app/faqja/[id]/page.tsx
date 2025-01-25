'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const QuranPage = () => {
	const { id } = useParams<{ id: string }>();
	console.log('🚀 ~ QuranPage ~ id:', id);
	return (
		<div className='flex flex-col justify-center items-center max-w-7xl gap-4 mx-auto'>
			<h1>Quran page - {id}</h1>

			<div>
				<Image src={`/img/quran/${id}.jpg`} className='bg-cover w-[700px] h-[1100px]' alt='quran page' width={700} height={1100} />
			</div>
		</div>
	);
};

export default QuranPage;
