import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFingerprintFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fingerprint-fill_svg__a)"><path fill="#000" d="M7.901 1.5c-3.48.053-6.325 2.88-6.401 6.363a6.47 6.47 0 0 0 .845 3.346.25.25 0 0 0 .444-.019 7.5 7.5 0 0 0 .71-3.187 4.49 4.49 0 0 1 1.688-3.514.5.5 0 1 1 .617.788A3.49 3.49 0 0 0 4.5 8.004a8.46 8.46 0 0 1-1.153 4.272.25.25 0 0 0 .038.303c.125.125.256.25.39.364a.25.25 0 0 0 .376-.063 9.5 9.5 0 0 0 1.161-2.975.5.5 0 1 1 .98.2 10.5 10.5 0 0 1-1.316 3.352.25.25 0 0 0 .1.352q.231.117.473.217a.25.25 0 0 0 .312-.1A11.44 11.44 0 0 0 7.5 8.016a.51.51 0 0 1 .465-.513.5.5 0 0 1 .535.5 12.43 12.43 0 0 1-1.576 6.073.25.25 0 0 0 .185.37q.285.04.575.053a.25.25 0 0 0 .23-.13A13.4 13.4 0 0 0 9.5 8.05c.003-.828-.644-1.53-1.471-1.546A1.5 1.5 0 0 0 6.499 8a.506.506 0 0 1-.455.5A.5.5 0 0 1 5.5 8a2.5 2.5 0 0 1 2.526-2.5c1.375.014 2.48 1.198 2.473 2.572a14.5 14.5 0 0 1-1.282 5.91.25.25 0 0 0 .289.345q.325-.077.64-.187a.25.25 0 0 0 .148-.139q.436-1.036.717-2.125a.5.5 0 0 1 .969.25q-.07.273-.15.544a.25.25 0 0 0 .404.26A6.5 6.5 0 0 0 7.9 1.5m4.474 8.567a.5.5 0 0 1-.992-.124q.12-.965.12-1.938a3.505 3.505 0 0 0-3.937-3.473.5.5 0 1 1-.125-.993 4.506 4.506 0 0 1 5.062 4.468q0 1.034-.128 2.06" /></g><defs><clipPath id="fingerprint-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFingerprintFill);
const Memo = memo(ForwardRef);
export default Memo;