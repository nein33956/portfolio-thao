export type Submission = {
  fileName: string;
  submittedAt: string; // thời gian nộp
  status: string; // trạng thái (vd: Đã nộp · Đang chờ chấm)
  fileUrl: string; // link tải/xem file bài làm (CDN)
};

export type Project = {
  id: number;
  slug: string;
  task: string; // "Nhiệm vụ 1"
  title: string;
  short: string; // mô tả ngắn trên card
  icon: string; // key icon (map trong component)
  gradient: string; // tailwind gradient classes
  objective: string;
  steps: string[];
  tools: string[];
  lmsUrl: string; // link trang bài trên LMS (cần đăng nhập) — để "" nếu chưa có
  submission: Submission | null; // thông tin bài đã nộp — null nếu chưa có
  requirementImg?: string; // (tuỳ chọn) ảnh chụp yêu cầu đề bài
  proofImgs?: string[]; // (tuỳ chọn) các ảnh chụp minh chứng đã nộp
  viewUrl?: string; // (tuỳ chọn) link "Xem bài" (Google Tài liệu / Drive...)
  aiNote: string;
  lesson: string;
};

export const SITE = {
  fullName: "Nguyễn Phương Thảo",
  major: "Ngành Y Khoa",
  school: "ĐH Y Dược - Đại học Quốc gia Hà Nội",
  year: "2026",
  email: "[email@cua.ban]",
  hobbies: "Du lịch, Foodtour, Chơi Game",
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "bai-1-quan-ly-tep-thu-muc",
    task: "Nhiệm vụ 1",
    title: "Máy tính & thiết bị ngoại vi",
    short: "Thao tác cơ bản với tệp tin và thư mục một cách thành thạo.",
    icon: "HardDrive",
    gradient: "from-cyan-400 to-blue-600",
    objective:
      "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).",
    steps: [
      "Mở File Explorer (phím tắt Windows + E).",
      "Truy cập ổ đĩa/thư mục: This PC → ổ D: (hoặc thư mục Documents).",
      "Tạo thư mục mới đặt tên: ThucHanh_HoTen.",
      "Vào thư mục vừa tạo.",
      "Tạo tệp văn bản GhiChu.txt (New → Text Document).",
      "Đổi tên tệp thành GhiChuQuanTrong.txt (Rename).",
      "Tạo thư mục con TaiLieu bên trong.",
      "Sao chép GhiChuQuanTrong.txt (Copy) rồi dán (Paste) vào thư mục TaiLieu.",
      "Di chuyển: tạo DiChuyen.txt rồi Cut & Paste vào thư mục TaiLieu.",
      "Xóa tệp GhiChuQuanTrong.txt trong TaiLieu → chuyển vào Thùng rác.",
      "Xóa vĩnh viễn DiChuyen.txt bằng Shift + Delete.",
      "Khôi phục GhiChuQuanTrong.txt từ Thùng rác (Restore).",
    ],
    tools: ["Windows", "File Explorer"],
    lmsUrl: "",
    submission: {
      fileName: "baitapthuchanh-npt.docx",
      submittedAt: "09/03/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai1-yeucau.jpg",
    proofImgs: ["/img/bai1-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260309/tmp0vuuka_baitapthuchanh-npt.docx",
    aiNote:
      "Bài tập thực hành thao tác trực tiếp trên hệ điều hành Windows, không sử dụng công cụ AI. Toàn bộ ảnh minh hoạ trong bài nộp do chính tôi chụp màn hình trong quá trình thực hiện.",
    lesson:
      "Thành thạo các thao tác quản lý tệp/thư mục là nền tảng để tổ chức tài liệu học tập y khoa một cách khoa học, tránh thất lạc dữ liệu và làm việc hiệu quả hơn.",
  },
  {
    id: 2,
    slug: "bai-2-tim-kiem-danh-gia-thong-tin",
    task: "Nhiệm vụ 2",
    title: "Khai thác dữ liệu & thông tin",
    short: "Tìm kiếm và đánh giá thông tin học thuật đáng tin cậy.",
    icon: "Search",
    gradient: "from-emerald-400 to-teal-600",
    objective:
      "Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    steps: [
      "Chọn một chủ đề liên quan đến ngành học (Y Khoa).",
      "Tìm kiếm thông tin từ nhiều nguồn: CSDL học thuật (Google Scholar, Microsoft Academic, thư viện trường), tạp chí khoa học chuyên ngành, sách chuyên khảo và các nguồn mở trên internet.",
      "Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề (gồm ít nhất 5 bài báo khoa học).",
      "Đánh giá độ tin cậy mỗi nguồn theo tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, tính cập nhật.",
      "Tạo bảng tổng hợp các nguồn kèm đánh giá & xếp hạng độ tin cậy.",
      "Viết báo cáo 3-4 trang kèm danh mục tài liệu tham khảo theo định dạng Harvard.",
    ],
    tools: ["Gemini", "NotebookLM", "ChatGPT"],
    lmsUrl: "",
    submission: {
      fileName: "u-xo-tu-cung-nop-ai.docx",
      submittedAt: "05/06/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai2-yeucau.jpg",
    proofImgs: ["/img/bai2-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260605/tmpnxa6e5_u-xo-tu-cung-nop-ai.docx",
    aiNote:
      "Toàn bộ tài liệu tham khảo được trích dẫn theo định dạng Harvard. Việc đánh giá và xếp hạng độ tin cậy của từng nguồn do tôi tự thực hiện dựa trên các tiêu chí học thuật.",
    lesson:
      "Kỹ năng thẩm định nguồn giúp tôi chọn lọc thông tin y khoa chính xác, tránh tin sai lệch — yếu tố rất quan trọng khi học và hành nghề trong ngành Y.",
  },
  {
    id: 3,
    slug: "bai-3-viet-prompt-hieu-qua",
    task: "Nhiệm vụ 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    short: "Viết Prompt hiệu quả — so sánh kết quả trước & sau khi tối ưu.",
    icon: "Sparkles",
    gradient: "from-violet-400 to-fuchsia-600",
    objective:
      "Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn (LLM) trong học tập.",
    steps: [
      "Chọn 3 tác vụ học tập phổ biến: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp, tạo bộ câu hỏi ôn tập.",
      "Với mỗi tác vụ, viết 3 phiên bản prompt: cơ bản → cải tiến (có cấu trúc) → nâng cao (role prompting, chain-of-thought, few-shot examples).",
      "Thử nghiệm các prompt với một công cụ AI (ChatGPT) và so sánh kết quả.",
      "Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.",
      "Tổng hợp các nguyên tắc & mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.",
      "Viết báo cáo 3-4 trang kèm bảng so sánh prompt và ảnh chụp màn hình các bước.",
    ],
    tools: ["ChatGPT", "Prompt Engineering", "Few-shot / Chain-of-thought"],
    lmsUrl: "",
    submission: {
      fileName: "cap-nhat-ve-tieu-chay-cap-ai.docx",
      submittedAt: "05/06/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai3-yeucau.jpg",
    proofImgs: ["/img/bai3-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260605/tmpboafis_cap-nhat-ve-tieu-chay-cap-ai.docx",
    aiNote:
      "Bài tập có sử dụng công cụ AI (ChatGPT) để thử nghiệm và so sánh các phiên bản prompt. Toàn bộ prompt, kết quả AI và phần phân tích đều được trình bày minh bạch trong báo cáo.",
    lesson:
      "Biết viết prompt tốt giúp tôi biến AI thành trợ lý học tập đắc lực — tóm tắt tài liệu y khoa, giải thích khái niệm và ôn tập hiệu quả hơn.",
  },
  {
    id: 4,
    slug: "bai-4-hop-tac-truc-tuyen",
    task: "Nhiệm vụ 4",
    title: "Giao tiếp & hợp tác số",
    short: "Hợp tác trực tuyến: làm việc nhóm, chia sẻ tài liệu thời gian thực.",
    icon: "Users",
    gradient: "from-orange-400 to-rose-600",
    objective:
      "Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.",
    steps: [
      "Bối cảnh: làm việc cùng nhóm thực hiện một dự án nhỏ; bài nộp tập trung vào vai trò & trải nghiệm cá nhân.",
      "Thiết lập/sử dụng ít nhất 3 công cụ từ các nhóm: quản lý dự án (Trello/Asana/Planner), soạn thảo cộng tác (Google Docs), lưu trữ & chia sẻ (Google Drive/OneDrive), giao tiếp nhóm (Slack/Discord/Teams).",
      "Thực hiện nhiệm vụ cá nhân trong 1 tuần: tự quản lý danh sách nhiệm vụ, đóng góp trên tài liệu cộng tác, tương tác/thảo luận với thành viên, tổ chức lưu trữ tệp khoa học.",
      "Ghi nhật ký minh chứng: ảnh chụp màn hình thể hiện rõ tên tài khoản / phần đóng góp cá nhân.",
      "Viết báo cáo cá nhân 4-5 trang: mô tả tác vụ, phân tích hiệu quả công cụ, thách thức & cách giải quyết.",
    ],
    tools: ["CapCut Pro", "Notion", "Gemini"],
    lmsUrl: "",
    submission: {
      fileName: "minh-chung-dong-gop-vao-bao-tap-nhom.docx",
      submittedAt: "05/06/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai4-yeucau.jpg",
    proofImgs: ["/img/bai4-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260605/tmpfsyrw8_minh-chung-dong-gop-vao-bao-tap-nhom.docx",
    aiNote:
      "Báo cáo phản ánh trải nghiệm hợp tác thực tế của cá nhân; minh chứng (ảnh chụp màn hình) thể hiện rõ tài khoản và phần đóng góp của tôi trong dự án nhóm.",
    lesson:
      "Kỹ năng hợp tác số giúp tôi phối hợp nhóm hiệu quả — rất cần thiết trong môi trường y tế đòi hỏi làm việc đa ngành, chia sẻ thông tin nhanh và chính xác.",
  },
  {
    id: 5,
    slug: "bai-5-sang-tao-noi-dung-so",
    task: "Nhiệm vụ 5",
    title: "Sáng tạo nội dung số với AI",
    short: "Tạo hình ảnh / video bằng công cụ AI — sản phẩm sáng tạo cá nhân.",
    icon: "Wand2",
    gradient: "from-pink-400 to-purple-600",
    objective:
      "Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",
    steps: [
      "Chọn một dự án sáng tạo nội dung: bài thuyết trình, bài viết, infographic hoặc video ngắn.",
      "Sử dụng ít nhất 3 công cụ AI tạo sinh khác nhau: AI tạo văn bản (ChatGPT/Gemini/Claude), AI tạo hình ảnh (DALL·E/Midjourney/Stable Diffusion), AI hỗ trợ thiết kế (Canva AI/Adobe Firefly).",
      "Ghi lại chi tiết quá trình: các prompt & kết quả, cách chỉnh sửa/tích hợp đầu ra AI, so sánh kết quả giữa các công cụ.",
      "Hoàn thiện dự án bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng mình.",
      "Viết phân tích vai trò của AI: điểm mạnh & hạn chế, cách AI thay đổi quy trình sáng tạo, và các vấn đề đạo đức cần cân nhắc.",
      "Nộp báo cáo 4-5 trang kèm sản phẩm cuối, ảnh chụp quá trình dùng AI và các phiên bản trung gian.",
    ],
    tools: ["NotebookLM", "Gemini", "ChatGPT"],
    lmsUrl: "",
    submission: {
      fileName: "su-dung-ai-tao-sinh-de-ho-tro-sang-tao-noi-dung.docx",
      submittedAt: "05/06/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai5-yeucau.jpg",
    proofImgs: ["/img/bai5-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260605/tmpfxviz9_su-dung-ai-tao-sinh-de-ho-tro-sang-tao-noi-dung.docx",
    aiNote:
      "Bài tập sử dụng nhiều công cụ AI tạo sinh (văn bản, hình ảnh, thiết kế). Toàn bộ prompt, đầu ra AI và phần chỉnh sửa/đóng góp cá nhân đều được ghi lại minh bạch; bài có phần phân tích riêng về các vấn đề đạo đức khi sử dụng AI.",
    lesson:
      "Tôi học được cách phối hợp AI với tư duy sáng tạo cá nhân để tạo nội dung số chất lượng — hữu ích cho truyền thông sức khoẻ và giáo dục y khoa.",
  },
  {
    id: 6,
    slug: "bai-6-ai-co-trach-nhiem",
    task: "Nhiệm vụ 6",
    title: "An toàn & liêm chính học thuật",
    short: "Sử dụng AI có trách nhiệm, đạo đức số & liêm chính học thuật.",
    icon: "ShieldCheck",
    gradient: "from-teal-400 to-cyan-700",
    objective:
      "Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.",
    steps: [
      "Nghiên cứu chính sách của trường (hoặc một trường ĐH lớn ở Việt Nam) về việc sử dụng AI trong học tập & nghiên cứu.",
      "Chọn một nhiệm vụ học tập và thực hiện với hỗ trợ của AI: ghi lại prompt, đầu ra AI, cách đánh giá/chỉnh sửa/tích hợp và trích dẫn việc dùng AI minh bạch.",
      "Phân tích các vấn đề đạo đức: ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, quyền sở hữu trí tuệ & trích dẫn, tác động đến học tập và phát triển kỹ năng.",
      "Xây dựng bộ nguyên tắc cá nhân (5-7 nguyên tắc) về sử dụng AI có trách nhiệm trong học tập.",
      "Tạo một infographic minh hoạ 'Sử dụng AI có trách nhiệm trong học thuật'.",
      "Nộp báo cáo 4-5 trang gồm phân tích chính sách, quá trình dùng AI, phân tích đạo đức, bộ nguyên tắc cá nhân và infographic.",
    ],
    tools: ["ChatGPT", "Canva (infographic)", "Trích dẫn học thuật"],
    lmsUrl: "",
    submission: {
      fileName: "ai-chuan-bi-tai-lieu-thuyet-trinh-de-hieu.docx",
      submittedAt: "05/06/2026",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl: "",
    },
    requirementImg: "/img/bai6-yeucau.jpg",
    proofImgs: ["/img/bai6-mc1.jpg"],
    viewUrl:
      "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100147/20260605/tmprhpcud_ai-chuan-bi-tai-lieu-thuyet-trinh-de-hieu.docx",
    aiNote:
      "Bài tập trực tiếp về sử dụng AI có trách nhiệm: mọi prompt và đầu ra AI đều được ghi lại và trích dẫn minh bạch. Bài có bộ nguyên tắc cá nhân và phân tích ranh giới giữa hỗ trợ hợp lý và gian lận học thuật.",
    lesson:
      "Hiểu rõ ranh giới đạo đức khi dùng AI giúp tôi vừa tận dụng công nghệ vừa giữ liêm chính — đặc biệt quan trọng trong ngành Y, nơi bảo mật dữ liệu bệnh nhân và tính chính xác là tối quan trọng.",
  },
];
