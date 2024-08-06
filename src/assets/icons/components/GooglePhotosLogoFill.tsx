import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGooglePhotosLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-photos-logo-fill_svg__a)"><path fill="#000" d="M14.5 7.5h-2.47A4.5 4.5 0 0 0 8 1a.5.5 0 0 0-.5.5v2.47A4.5 4.5 0 0 0 1 8a.5.5 0 0 0 .5.5h2.47A4.5 4.5 0 0 0 8 15a.5.5 0 0 0 .5-.5v-2.47A4.5 4.5 0 0 0 15 8a.5.5 0 0 0-.5-.5m-9-3a3.46 3.46 0 0 1 2 .625V7.5H2.036a3.506 3.506 0 0 1 3.464-3m5 7a3.46 3.46 0 0 1-2-.625V8.5h5.464a3.506 3.506 0 0 1-3.464 3" /></g><defs><clipPath id="google-photos-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGooglePhotosLogoFill);
const Memo = memo(ForwardRef);
export default Memo;