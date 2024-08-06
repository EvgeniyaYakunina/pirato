import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAmazonLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#amazon-logo-fill_svg__a)"><path fill="#000" d="M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5-.5A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-5-1.5a2.5 2.5 0 1 0 0 4 .5.5 0 0 0 1 0v-4a2.5 2.5 0 0 0-4.617-1.33.5.5 0 0 0 .846.532A1.5 1.5 0 0 1 9.5 6.5m2.8 4.1a.5.5 0 0 0-.7.1 4.5 4.5 0 0 1-7.2 0 .5.5 0 1 0-.8.6 5.5 5.5 0 0 0 8.8 0 .5.5 0 0 0-.1-.7" /></g><defs><clipPath id="amazon-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAmazonLogoFill);
const Memo = memo(ForwardRef);
export default Memo;