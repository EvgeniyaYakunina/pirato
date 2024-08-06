import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-minus-fill_svg__a)"><path fill="#000" d="M13.5 4.5H8.207L6.5 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1v9.039a.963.963 0 0 0 .962.961h11.094a.945.945 0 0 0 .944-.944V5.5a1 1 0 0 0-1-1m-11-1h3.293l1 1H2.5zm7 6h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1" /></g><defs><clipPath id="folder-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderMinusFill);
const Memo = memo(ForwardRef);
export default Memo;