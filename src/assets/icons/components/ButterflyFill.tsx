import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgButterflyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#butterfly-fill_svg__a)"><path fill="#000" d="M8 6.26a7 7 0 0 0-.5-.79V3.5a.5.5 0 1 1 1 0v1.97a7 7 0 0 0-.5.79m6.544-3.105c-.232-.299-.679-.655-1.482-.655-1.053 0-2.403.705-3.613 1.885A9 9 0 0 0 8.5 5.471v5.779a.5.5 0 0 1-1 0V5.47a9 9 0 0 0-.947-1.085C5.343 3.205 3.993 2.5 2.938 2.5c-.803 0-1.25.356-1.482.655-.426.548-.761 1.505-.013 4.45.378 1.49 1.22 2.063 1.915 2.276A2.75 2.75 0 0 0 8 12.83a2.75 2.75 0 0 0 4.643-2.948c.694-.212 1.535-.787 1.914-2.276.42-1.653.746-3.474-.013-4.45" /></g><defs><clipPath id="butterfly-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgButterflyFill);
const Memo = memo(ForwardRef);
export default Memo;