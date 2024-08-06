import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScrewdriverFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#screwdriver-fill_svg__a)"><path fill="#000" d="M14.577 1.422a3.154 3.154 0 0 0-4.457 0L6.793 4.75a1 1 0 0 0-.293.706V6.5H5.448c-.218 0-.43.072-.604.202a1 1 0 0 0-.05.045l-.5.5a1 1 0 0 0 0 1.415l1.168 1.17-4.813 4.815a.5.5 0 1 0 .708.707l4.812-4.816 1.17 1.17a1 1 0 0 0 1.414 0l.5-.5a1 1 0 0 0 .248-.656V9.5h1.043a1 1 0 0 0 .706-.294l3.327-3.327a3.153 3.153 0 0 0 0-4.457m-1.723 2.43-3.5 3.5a.5.5 0 1 1-.708-.706l3.5-3.5a.5.5 0 0 1 .708.707" /></g><defs><clipPath id="screwdriver-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgScrewdriverFill);
const Memo = memo(ForwardRef);
export default Memo;