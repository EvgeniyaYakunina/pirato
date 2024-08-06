import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUmbrellaSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#umbrella-simple-fill_svg__a)"><path fill="#000" d="M14.735 8.677A1 1 0 0 1 14 9H8.5v3.5a1 1 0 0 0 2 0 .5.5 0 0 1 1 0 2 2 0 0 1-4 0V9H2a1 1 0 0 1-1-1.086A7.027 7.027 0 0 1 12.763 3.36 6.97 6.97 0 0 1 15 7.914a1 1 0 0 1-.265.763" /></g><defs><clipPath id="umbrella-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUmbrellaSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;