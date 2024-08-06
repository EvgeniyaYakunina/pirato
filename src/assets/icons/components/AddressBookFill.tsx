import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddressBookFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#address-book-fill_svg__a)"><path fill="#000" d="M10 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4.5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V12H2a.5.5 0 0 1 0-1h1V8.5H2a.5.5 0 1 1 0-1h1V5H2a.5.5 0 1 1 0-1h1V2.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-2.1 7.7a4.24 4.24 0 0 0-1.713-1.356 2.5 2.5 0 1 0-3.37 0A4.24 4.24 0 0 0 5.1 10.2a.5.5 0 1 0 .8.6 3.25 3.25 0 0 1 5.2 0 .5.5 0 0 0 .8-.6" /></g><defs><clipPath id="address-book-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAddressBookFill);
const Memo = memo(ForwardRef);
export default Memo;