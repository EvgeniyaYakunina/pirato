import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddressBookTabsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#address-book-tabs-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 1H13v2.5h-1.5zm0 3.5H13v3h-1.5zm-2.375 4.484a.5.5 0 0 1-.609-.36C8.352 9.984 7.7 9.5 7.001 9.5c-.7 0-1.351.484-1.516 1.125a.5.5 0 0 1-.969-.25 2.5 2.5 0 0 1 1.075-1.458 2 2 0 1 1 2.82 0c.528.334.912.855 1.073 1.459a.5.5 0 0 1-.359.61M13 13h-1.5v-2.5H13zM8 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="address-book-tabs-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAddressBookTabsFill);
const Memo = memo(ForwardRef);
export default Memo;