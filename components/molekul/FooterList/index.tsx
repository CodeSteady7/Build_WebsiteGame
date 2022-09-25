import Link from 'next/link';
import React from 'react';

interface ListFooter {
	title?: string;
	desc1?: string;
	desc2?: string;
	desc3?: string;
	desc4?: string;
	classStyle?: string;
	hrefs?: string;
	hrefs3?: string;
}
export default function FooterList(prop: Partial<ListFooter>) {
	const { title, desc1, desc2, desc3, desc4, classStyle, hrefs = '/', hrefs3 = '/' } = prop;
	return (
		<div className={classStyle}>
			<p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
			<ul className="list-unstyled">
				<li className="mb-6">
					<Link href={hrefs}>
						<a className="text-lg color-palette-1 text-decoration-none">{desc1}</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={hrefs}>
						<a className="text-lg color-palette-1 text-decoration-none">{desc2}</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={hrefs3}>
						<a className="text-lg color-palette-1 text-decoration-none">{desc3}</a>
					</Link>
				</li>
				<li className="mb-6">
					<Link href={hrefs}>
						<a className="text-lg color-palette-1 text-decoration-none">{desc4}</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
