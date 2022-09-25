import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps {
	title?: string;
	linkHref?: string;
	active?: boolean;
	icon:
		| 'ic-menu-card'
		| 'ic-menu-messages'
		| 'ic-menu-overview'
		| 'ic-menu-rewards'
		| 'ic-menu-settings'
		| 'ic-menu-transactions'
		| 'ic-menu-logout';
}

export default function MenuItems(props: Partial<MenuItemProps>) {
	const { title, icon, linkHref = '/', active } = props;

	const classItem = cx({
		item: true,
		'mb-30': true,
		active: active,
	});

	return (
		<div className={classItem}>
			<div className="me-3">
				<Image src={`/icon/${icon}.svg`} width={25} height={25} />
			</div>
			<p className="item-title m-0">
				<Link href={linkHref}>
					<a className="text-lg text-decoration-none">{title}</a>
				</Link>
			</p>
		</div>
	);
}
