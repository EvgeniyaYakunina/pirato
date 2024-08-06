import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStorefrontFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#storefront-fill_svg__a)"><path fill="#000" d="m14.48 5.863-.896-3.138A1.005 1.005 0 0 0 12.625 2h-9.25a1.004 1.004 0 0 0-.96.725L1.52 5.863A.5.5 0 0 0 1.5 6v1a2.5 2.5 0 0 0 1 2v4.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9a2.5 2.5 0 0 0 1-2V6a.5.5 0 0 0-.02-.137M5.5 7a1.5 1.5 0 0 1-2.195 1.329.5.5 0 0 0-.114-.067A1.5 1.5 0 0 1 2.5 7v-.5h3zm4 0a1.5 1.5 0 0 1-3 0v-.5h3zm4 0a1.5 1.5 0 0 1-.692 1.262.5.5 0 0 0-.112.066A1.5 1.5 0 0 1 10.5 7v-.5h3z" /></g><defs><clipPath id="storefront-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStorefrontFill);
const Memo = memo(ForwardRef);
export default Memo;