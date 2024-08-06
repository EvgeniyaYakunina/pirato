import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGpsSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gps-slash-fill_svg__a)"><path fill="#000" d="M15 8.5h-1.523a5.45 5.45 0 0 1-.633 2.1.25.25 0 0 1-.308.118.25.25 0 0 1-.098-.067l-6.656-7.32a.25.25 0 0 1 .087-.4c.52-.22 1.07-.357 1.631-.408V1a.5.5 0 0 1 .533-.5.51.51 0 0 1 .467.517v1.506A5.51 5.51 0 0 1 13.477 7.5h1.506a.51.51 0 0 1 .516.467A.497.497 0 0 1 15 8.5M3.37 2.164a.5.5 0 1 0-.74.672l1.318 1.45A5.48 5.48 0 0 0 2.523 7.5H1a.5.5 0 0 0 0 1h1.523A5.51 5.51 0 0 0 7.5 13.477V15a.5.5 0 0 0 1 0v-1.523a5.47 5.47 0 0 0 2.813-1.09l1.317 1.45a.499.499 0 1 0 .74-.673z" /></g><defs><clipPath id="gps-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGpsSlashFill);
const Memo = memo(ForwardRef);
export default Memo;