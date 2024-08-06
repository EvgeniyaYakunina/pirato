import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAndroidLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#android-logo-fill_svg__a)"><path fill="#000" d="m12.941 5.042-.14-.136 1.553-1.552a.5.5 0 0 0-.708-.708l-1.625 1.625a6.965 6.965 0 0 0-8.034.012L2.354 2.646a.5.5 0 1 0-.708.708L3.213 4.92A7.09 7.09 0 0 0 1 10.07v1.43a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a6.95 6.95 0 0 0-2.059-4.958M5.75 10a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m4.5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="android-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAndroidLogoFill);
const Memo = memo(ForwardRef);
export default Memo;