
import React from 'react'

export const Logo = (props) => {
    return (<>
        {props.big ?
            <svg width="60" height={props.height} viewBox="0 0 83 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4782 45.2951C37.3519 48.5224 32.1507 50.0559 26.9335 49.5833C21.7164 49.1108 16.8754 46.6677 13.3961 42.7515C9.91687 38.8353 8.06085 33.7403 8.20592 28.5038C8.35098 23.2673 10.4862 18.2829 14.177 14.5653C17.8678 10.8478 22.8366 8.67647 28.0719 8.49349C33.3072 8.3105 38.4155 10.1296 42.3568 13.5804C46.2981 17.0312 48.7761 21.8544 49.2864 27.068C49.7967 32.2816 48.301 37.4937 45.1036 41.6433L43.7092 40.5689C46.6333 36.774 48.0012 32.0074 47.5345 27.2395C47.0678 22.4715 44.8016 18.0607 41.1972 14.9048C37.5928 11.749 32.9212 10.0854 28.1334 10.2527C23.3456 10.4201 18.8015 12.4058 15.4262 15.8056C12.051 19.2054 10.0982 23.7637 9.96556 28.5526C9.8329 33.3414 11.5303 38.0009 14.7121 41.5823C17.894 45.1638 22.3211 47.398 27.0923 47.8302C31.8635 48.2623 36.6201 46.8599 40.3937 43.9085L41.4782 45.2951Z" fill="#59A2C4" />
                <path d="M40.998 12.8475C45.2124 9.75857 50.4435 8.38722 55.6313 9.01127C60.819 9.63532 65.5756 12.2081 68.9373 16.2083C72.2989 20.2086 74.0142 25.3371 73.7357 30.5549C73.4571 35.7726 71.2056 40.6894 67.4371 44.309C63.6687 47.9286 58.6652 49.9803 53.4405 50.0485C48.2158 50.1167 43.1605 48.1962 39.2989 44.6761C35.4373 41.1561 33.0582 36.2998 32.6436 31.0911C32.2289 25.8823 33.8099 20.7108 37.066 16.6242L38.4427 17.7212C35.4649 21.4584 34.0192 26.1879 34.3983 30.9514C34.7775 35.7148 36.9532 40.1561 40.4847 43.3752C44.0162 46.5943 48.6394 48.3506 53.4175 48.2883C58.1956 48.226 62.7714 46.3496 66.2177 43.0394C69.664 39.7292 71.7231 35.2327 71.9779 30.461C72.2326 25.6893 70.6639 20.9991 67.5896 17.3408C64.5153 13.6825 60.1654 11.3297 55.421 10.759C50.6767 10.1883 45.8928 11.4424 42.0387 14.2673L40.998 12.8475Z" fill="#59A2C4" />
                <path d="M43.4202 17.1439C46.4736 14.739 50.3242 13.5789 54.198 13.8969C58.0718 14.2149 61.6817 15.9874 64.3021 18.8581C66.9224 21.7289 68.3591 25.485 68.3233 29.3717C68.2874 33.2584 66.7818 36.9874 64.109 39.8094C61.4361 42.6313 57.7942 44.337 53.9152 44.5835C50.0362 44.8301 46.2076 43.5992 43.199 41.1384C40.1904 38.6775 38.2248 35.1691 37.6972 31.3182C37.1696 27.4674 38.1191 23.5596 40.3549 20.3802L41.4307 21.1367C39.3859 24.0443 38.5176 27.6181 39.0001 31.1397C39.4826 34.6614 41.2802 37.8699 44.0316 40.1204C46.7831 42.3709 50.2844 43.4965 53.8318 43.2711C57.3792 43.0456 60.7098 41.4857 63.1542 38.905C65.5985 36.3243 66.9755 32.914 67.0082 29.3596C67.041 25.8052 65.7272 22.3701 63.3308 19.7447C60.9344 17.1194 57.6331 15.4984 54.0904 15.2076C50.5478 14.9168 47.0263 15.9777 44.2339 18.1771L43.4202 17.1439Z" fill="#59A2C4" />
                <path d="M37.999 41.7501C34.8471 44.0245 30.9512 45.0217 27.0942 44.5411C23.2372 44.0605 19.705 42.1379 17.2076 39.1595C14.7103 36.1811 13.4328 32.3679 13.632 28.4862C13.8312 24.6045 15.4923 20.942 18.2814 18.2349C21.0705 15.5278 24.7809 13.9768 28.6668 13.8935C32.5528 13.8103 36.3262 15.201 39.2287 17.7861C42.1312 20.3713 43.9476 23.9592 44.3129 27.8289C44.6781 31.6985 43.5651 35.563 41.1976 38.6455L40.1546 37.8445C42.3198 35.0254 43.3376 31.4913 43.0036 27.9525C42.6696 24.4136 41.0084 21.1323 38.354 18.7682C35.6996 16.404 32.2488 15.1322 28.695 15.2083C25.1412 15.2845 21.748 16.7029 19.1973 19.1786C16.6466 21.6543 15.1275 25.0037 14.9454 28.5536C14.7632 32.1035 15.9315 35.5908 18.2154 38.3145C20.4993 41.0383 23.7295 42.7966 27.2568 43.2361C30.7841 43.6756 34.347 42.7637 37.2295 40.6836L37.999 41.7501Z" fill="#59A2C4" />
            </svg> :


            <svg width="42" height={props.height} viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9871 23.0236C17.8397 24.4438 15.2367 25.0039 12.6952 24.5928C10.1538 24.1817 7.86004 22.8294 6.26994 20.8047C4.67984 18.78 3.90979 16.231 4.11284 13.6646C4.31588 11.0981 5.47717 8.70202 7.36587 6.95251C9.25457 5.20301 11.7324 4.2282 14.3069 4.22184C16.8813 4.21548 19.364 5.17804 21.2613 6.91819C23.1586 8.65835 24.3317 11.0487 24.5474 13.6141C24.7631 16.1795 24.0057 18.7322 22.4256 20.7648L21.7338 20.227C23.1788 18.3681 23.8715 16.0337 23.6742 13.6875C23.4769 11.3414 22.4041 9.1554 20.669 7.564C18.9338 5.97259 16.6634 5.09231 14.309 5.09813C11.9546 5.10394 9.68861 5.99542 7.96135 7.59538C6.2341 9.19533 5.17209 11.3866 4.9864 13.7337C4.80071 16.0808 5.50494 18.4118 6.95911 20.2635C8.41329 22.1151 10.5109 23.3518 12.8351 23.7278C15.1593 24.1038 17.5399 23.5915 19.5037 22.2927L19.9871 23.0236Z" fill="#59A2C4" />
                <path d="M20.8351 6.09936C22.9698 4.69511 25.5519 4.13868 28.0755 4.53911C30.5991 4.93955 32.8822 6.26798 34.4773 8.26407C36.0724 10.2602 36.8646 12.78 36.6986 15.3297C36.5326 17.8795 35.4204 20.2753 33.5799 22.0478C31.7394 23.8202 29.3034 24.8414 26.7492 24.9112C24.195 24.981 21.7068 24.0945 19.7722 22.4253C17.8376 20.7561 16.5961 18.4246 16.291 15.8877C15.9859 13.3509 16.6392 10.7915 18.1229 8.71124L18.8363 9.22007C17.4795 11.1225 16.882 13.4631 17.161 15.7831C17.4401 18.1031 18.5754 20.2353 20.3446 21.7618C22.1138 23.2883 24.3894 24.0991 26.7252 24.0352C29.0611 23.9714 31.2889 23.0375 32.972 21.4166C34.6552 19.7957 35.6723 17.6046 35.8242 15.2728C35.976 12.941 35.2515 10.6366 33.7927 8.81112C32.334 6.98566 30.2461 5.77078 27.9382 5.40458C25.6303 5.03837 23.2689 5.54724 21.3167 6.83145L20.8351 6.09936Z" fill="#59A2C4" />
                <path d="M21.6147 8.53427C23.1347 7.33707 25.0515 6.75959 26.9799 6.91789C28.9083 7.0762 30.7053 7.95854 32.0097 9.38759C33.3141 10.8166 34.0293 12.6865 34.0115 14.6213C33.9936 16.556 33.2441 18.4124 31.9136 19.8171C30.583 21.2219 28.7701 22.071 26.8391 22.1937C24.9081 22.3164 23.0023 21.7037 21.5046 20.4787C20.0069 19.2537 19.0284 17.5072 18.7658 15.5902C18.5031 13.6733 18.9758 11.728 20.0888 10.1453L20.6243 10.5218C19.6065 11.9692 19.1742 13.7483 19.4144 15.5014C19.6546 17.2545 20.5494 18.8517 21.9191 19.972C23.2887 21.0923 25.0317 21.6526 26.7976 21.5404C28.5635 21.4281 30.2215 20.6516 31.4383 19.3669C32.6551 18.0823 33.3405 16.3846 33.3568 14.6152C33.3731 12.8458 32.7191 11.1358 31.5262 9.82894C30.3333 8.52204 28.6899 7.71512 26.9263 7.57035C25.1628 7.42558 23.4098 7.9537 22.0198 9.04855L21.6147 8.53427Z" fill="#59A2C4" />
                <path d="M18.9159 20.7832C17.3469 21.9154 15.4075 22.4118 13.4875 22.1726C11.5675 21.9334 9.80916 20.9762 8.56597 19.4936C7.32277 18.011 6.68685 16.1128 6.786 14.1804C6.88516 12.2481 7.71205 10.4249 9.10047 9.07735C10.4889 7.72977 12.3359 6.95766 14.2703 6.91622C16.2048 6.87477 18.0832 7.56707 19.528 8.85395C20.9729 10.1408 21.8771 11.9269 22.0589 13.8532C22.2408 15.7795 21.6867 17.7033 20.5082 19.2378L19.989 18.839C21.0668 17.4357 21.5735 15.6764 21.4072 13.9147C21.2409 12.1531 20.414 10.5197 19.0926 9.34282C17.7713 8.16593 16.0534 7.53282 14.2844 7.57072C12.5153 7.60862 10.8262 8.31472 9.55642 9.54712C8.28668 10.7795 7.53047 12.4468 7.43979 14.214C7.34911 15.9811 7.93068 17.7171 9.0676 19.073C10.2045 20.4289 11.8125 21.3042 13.5684 21.523C15.3243 21.7417 17.0979 21.2878 18.5328 20.2523L18.9159 20.7832Z" fill="#59A2C4" />
            </svg>}
    </>
    )
}

