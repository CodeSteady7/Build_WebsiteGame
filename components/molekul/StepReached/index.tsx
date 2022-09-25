import cx from 'classnames';

interface ListReached {
	title: string;
	desc: string;
	style?: string;
}

export default function StepReached(prop: ListReached) {
	const { title, desc, style } = prop;

	const classTitle = cx({
		'me-lg-35': true,
		'ms-lg-35': style,
	});

	return (
		<div className={classTitle}>
			<p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
			<p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}c</p>
		</div>
	);
}
