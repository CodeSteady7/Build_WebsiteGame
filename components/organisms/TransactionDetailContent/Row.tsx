import { NumericFormat } from "react-number-format";
interface RowProps {
  label: string;
  value: number | string;
  className?: string;
  notNumber?: boolean;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, className, notNumber = false } = props;

  return (
    <>
      <p className='text-lg color-palette-1 mb-20'>
        {label}{" "}
        <span className={`purchase-details ${className}`}>
          {typeof value === "number" ? (
            <NumericFormat
              value={value}
              prefix='Rp. '
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
            />
          ) : (
            value
          )}
        </span>
      </p>
    </>
  );
}
