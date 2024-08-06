import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoinFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#coin-fill_svg__a)"><path fill="#000" d="M12.974 3.99C11.678 3.342 9.958 3 8 3s-3.678.342-4.974.99C1.731 4.638 1 5.549 1 6.5v3c0 .951.739 1.866 2.026 2.51C4.314 12.654 6.042 13 8 13s3.678-.342 4.974-.99C14.269 11.363 15 10.451 15 9.5v-3c0-.951-.739-1.866-2.026-2.51m-5.474 6v2c-1.187-.039-2.187-.214-3-.468V9.566c.98.26 1.987.403 3 .425zm1 0a12.7 12.7 0 0 0 3-.426v1.957c-.812.255-1.812.43-3 .468zM2 9.5V8.346c.315.26.66.484 1.026.664.152.076.313.147.474.214v1.901C2.51 10.635 2 10.018 2 9.5m10.5 1.625v-1.9q.245-.102.474-.215A5.2 5.2 0 0 0 14 8.346V9.5c0 .518-.51 1.135-1.5 1.625" /></g><defs><clipPath id="coin-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCoinFill);
const Memo = memo(ForwardRef);
export default Memo;