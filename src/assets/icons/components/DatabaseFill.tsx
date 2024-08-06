import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDatabaseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#database-fill_svg__a)"><path fill="#000" d="M8 1.5C4.636 1.5 2 3.038 2 5v6c0 1.963 2.636 3.5 6 3.5s6-1.537 6-3.5V5c0-1.962-2.636-3.5-6-3.5M13 8c0 .601-.492 1.214-1.35 1.682-.967.527-2.263.818-3.65.818s-2.683-.29-3.65-.818C3.494 9.215 3 8.603 3 8V6.96c1.066.938 2.89 1.54 5 1.54s3.934-.605 5-1.54zm-1.35 4.682c-.967.527-2.263.818-3.65.818s-2.683-.29-3.65-.818C3.494 12.215 3 11.603 3 11V9.96c1.066.938 2.89 1.54 5 1.54s3.934-.605 5-1.54V11c0 .601-.492 1.214-1.35 1.682" /></g><defs><clipPath id="database-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDatabaseFill);
const Memo = memo(ForwardRef);
export default Memo;