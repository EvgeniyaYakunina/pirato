import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUmbrellaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#umbrella-fill_svg__a)"><path fill="#000" d="M15 7.914A7.013 7.013 0 0 0 8 1.5a7.013 7.013 0 0 0-6.997 6.414A1 1 0 0 0 2 9h5.5v3.5a2 2 0 1 0 4 0 .5.5 0 1 0-1 0 1 1 0 0 1-2 0V9H14a1 1 0 0 0 1-1.086M2 8a6.01 6.01 0 0 1 4.763-5.368C6.03 3.625 5.116 5.382 5.01 8zm8.99 0c-.106-2.618-1.02-4.375-1.75-5.371A6 6 0 0 1 14 8z" /></g><defs><clipPath id="umbrella-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUmbrellaFill);
const Memo = memo(ForwardRef);
export default Memo;