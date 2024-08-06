import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaveSineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wave-sine-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-.299 5.715c-1.042 2.188-1.941 3.16-2.915 3.16-1.23 0-1.962-1.535-2.737-3.16C7 7.063 6.312 5.625 5.714 5.625c-.233 0-.898.25-2.013 2.59a.5.5 0 0 1-.902-.43c1.042-2.186 1.941-3.16 2.915-3.16 1.23 0 1.962 1.535 2.737 3.16.549 1.152 1.236 2.59 1.835 2.59.233 0 .898-.25 2.013-2.59a.502.502 0 0 1 .83-.128.5.5 0 0 1 .072.558" /></g><defs><clipPath id="wave-sine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWaveSineFill);
const Memo = memo(ForwardRef);
export default Memo;