import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAmbulanceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ambulance-fill_svg__a)"><path fill="#000" d="m15.964 7.313-.875-2.188a1 1 0 0 0-.928-.625H12V4a.5.5 0 0 0-.5-.5H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.063a2 2 0 0 0 3.875 0h3.125a2 2 0 0 0 3.874 0H15a1 1 0 0 0 1-1v-4a.5.5 0 0 0-.036-.187M5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.5-5h-1v1a.5.5 0 1 1-1 0V8h-1a.5.5 0 1 1 0-1h1V6a.5.5 0 1 1 1 0v1h1a.5.5 0 1 1 0 1m3.5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-6V5.5h2.161l.6 1.5z" /></g><defs><clipPath id="ambulance-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAmbulanceFill);
const Memo = memo(ForwardRef);
export default Memo;