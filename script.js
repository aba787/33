// Course Database - Approved courses with their exact requirements
const approvedCoursesDB = {
    // Mathematics Courses
    'رياضيات عامة': { credits: 3, minGrade: 60, category: 'mathematics', description: 'A foundational course covering basic mathematical principles and problem-solving techniques.' },
    'general mathematics': { credits: 3, minGrade: 60, category: 'mathematics', description: 'A foundational course covering basic mathematical principles and problem-solving techniques.' },
    'حساب التفاضل والتكامل': { credits: 4, minGrade: 60, category: 'mathematics', description: 'An introduction to differential and integral calculus, including limits, derivatives, and integrals.' },
    'calculus': { credits: 4, minGrade: 60, category: 'mathematics', description: 'An introduction to differential and integral calculus, including limits, derivatives, and integrals.' },
    'إحصاء': { credits: 3, minGrade: 60, category: 'mathematics', description: 'An overview of statistical methods, including descriptive statistics, probability, and hypothesis testing.' },
    'statistics': { credits: 3, minGrade: 60, category: 'mathematics', description: 'An overview of statistical methods, including descriptive statistics, probability, and hypothesis testing.' },
    'جبر خطي': { credits: 3, minGrade: 60, category: 'mathematics', description: 'Covers vectors, matrices, linear transformations, and systems of linear equations.' },
    'linear algebra': { credits: 3, minGrade: 60, category: 'mathematics', description: 'Covers vectors, matrices, linear transformations, and systems of linear equations.' },

    // Science Courses
    'فيزياء عامة': { credits: 4, minGrade: 60, category: 'science', description: 'Introduction to the fundamental principles of classical mechanics, thermodynamics, and electromagnetism.' },
    'general physics': { credits: 4, minGrade: 60, category: 'science', description: 'Introduction to the fundamental principles of classical mechanics, thermodynamics, and electromagnetism.' },
    'كيمياء عامة': { credits: 4, minGrade: 60, category: 'science', description: 'Explores the basic concepts of chemistry, including atomic structure, bonding, and reactions.' },
    'general chemistry': { credits: 4, minGrade: 60, category: 'science', description: 'Explores the basic concepts of chemistry, including atomic structure, bonding, and reactions.' },
    'أحياء عامة': { credits: 3, minGrade: 60, category: 'science', description: 'A survey of the biological sciences, covering cell biology, genetics, evolution, and ecology.' },
    'general biology': { credits: 3, minGrade: 60, category: 'science', description: 'A survey of the biological sciences, covering cell biology, genetics, evolution, and ecology.' },

    // Computer Science Courses
    'مقدمة في البرمجة': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Introduction to programming concepts using a high-level language, focusing on problem-solving and algorithm design.' },
    'introduction to programming': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Introduction to programming concepts using a high-level language, focusing on problem-solving and algorithm design.' },
    'هياكل البيانات': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Study of fundamental data structures such as lists, trees, graphs, and hash tables, and their applications.' },
    'data structures': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Study of fundamental data structures such as lists, trees, graphs, and hash tables, and their applications.' },
    'قواعد البيانات': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Principles of database design, implementation, and management, including relational models and SQL.' },
    'database systems': { credits: 3, minGrade: 60, category: 'computer_science', description: 'Principles of database design, implementation, and management, including relational models and SQL.' },
    'شبكات الحاسوب': { credits: 3, minGrade: 60, category: 'computer_science', description: 'An introduction to computer network concepts, protocols, and architectures.' },
    'computer networks': { credits: 3, minGrade: 60, category: 'computer_science', description: 'An introduction to computer network concepts, protocols, and architectures.' },

    // Engineering Courses
    'مقاومة المواد': { credits: 3, minGrade: 60, category: 'engineering', description: 'Analysis of stresses and strains in mechanical components under various loading conditions.' },
    'strength of materials': { credits: 3, minGrade: 60, category: 'engineering', description: 'Analysis of stresses and strains in mechanical components under various loading conditions.' },
    'ديناميكا': { credits: 3, minGrade: 60, category: 'engineering', description: 'Study of motion, forces, and energy, including particle and rigid body dynamics.' },
    'dynamics': { credits: 3, minGrade: 60, category: 'engineering', description: 'Study of motion, forces, and energy, including particle and rigid body dynamics.' },
    'استاتيكا': { credits: 3, minGrade: 60, category: 'engineering', description: 'Principles of static equilibrium for particles and rigid bodies.' },
    'statics': { credits: 3, minGrade: 60, category: 'engineering', description: 'Principles of static equilibrium for particles and rigid bodies.' },
    'دوائر كهربائية': { credits: 4, minGrade: 60, category: 'engineering', description: 'Analysis of DC and AC circuits, including components, theorems, and transient behavior.' },
    'electrical circuits': { credits: 4, minGrade: 60, category: 'engineering', description: 'Analysis of DC and AC circuits, including components, theorems, and transient behavior.' },

    // Language Courses
    'اللغة الإنجليزية': { credits: 3, minGrade: 60, category: 'language', description: 'Development of English language skills, focusing on grammar, vocabulary, and communication.' },
    'english language': { credits: 3, minGrade: 60, category: 'language', description: 'Development of English language skills, focusing on grammar, vocabulary, and communication.' },
    'اللغة العربية': { credits: 2, minGrade: 60, category: 'language', description: 'Enhancement of Arabic language proficiency, including grammar, literature, and composition.' },
    'arabic language': { credits: 2, minGrade: 60, category: 'language', description: 'Enhancement of Arabic language proficiency, including grammar, literature, and composition.' },

    // Business Courses
    'مبادئ الإدارة': { credits: 3, minGrade: 60, category: 'business', description: 'An introduction to the functions of management, including planning, organizing, leading, and controlling.' },
    'principles of management': { credits: 3, minGrade: 60, category: 'business', description: 'An introduction to the functions of management, including planning, organizing, leading, and controlling.' },
    'مبادئ المحاسبة': { credits: 3, minGrade: 60, category: 'business', description: 'Fundamentals of accounting principles and practices, including financial statement analysis.' },
    'principles of accounting': { credits: 3, minGrade: 60, category: 'business', description: 'Fundamentals of accounting principles and practices, including financial statement analysis.' },
    'مبادئ التسويق': { credits: 3, minGrade: 60, category: 'business', description: 'Exploration of marketing concepts, strategies, and the marketing mix.' },
    'principles of marketing': { credits: 3, minGrade: 60, category: 'business', description: 'Exploration of marketing concepts, strategies, and the marketing mix.' },

    // Social Sciences
    'علم النفس العام': { credits: 3, minGrade: 60, category: 'social_science', description: 'An introduction to the scientific study of behavior and mental processes.' },
    'general psychology': { credits: 3, minGrade: 60, category: 'social_science', description: 'An introduction to the scientific study of behavior and mental processes.' },
    'علم الاجتماع': { credits: 3, minGrade: 60, category: 'social_science', description: 'An examination of social structures, social interactions, and societal patterns.' },
    'sociology': { credits: 3, minGrade: 60, category: 'social_science', description: 'An examination of social structures, social interactions, and societal patterns.' },
    'التاريخ الإسلامي': { credits: 2, minGrade: 60, category: 'social_science', description: 'A study of the historical development of Islamic civilization.' },
    'islamic history': { credits: 2, minGrade: 60, category: 'social_science', description: 'A study of the historical development of Islamic civilization.' }
};

// Application State
const state = {
    courses: [],
    requirement: 120,
    costPerCredit: 200,
    currentLanguage: 'ar'
};

// Language data
const languages = {
    ar: {
        dir: 'rtl',
        lang: 'ar'
    },
    en: {
        dir: 'ltr',
        lang: 'en'
    }
};

// DOM Elements
const elements = {
    langToggle: document.getElementById('langToggle'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    courseName: document.getElementById('courseName'),
    courseCredits: document.getElementById('courseCredits'),
    courseGrade: document.getElementById('courseGrade'),
    
    addCourse: document.getElementById('addCourse'),
    coursesList: document.getElementById('coursesList'),
    courseCount: document.getElementById('courseCount'),
    calculateBtn: document.getElementById('calculateBtn'),
    saveSession: document.getElementById('saveSession'),
    loadSession: document.getElementById('loadSession'),
    resetAll: document.getElementById('resetAll'),
    totalPrevious: document.getElementById('totalPrevious'),
    acceptedHours: document.getElementById('acceptedHours'),
    remainingHours: document.getElementById('remainingHours'),
    estimatedCost: document.getElementById('estimatedCost'),
    studyPlan: document.getElementById('studyPlan'),
    exportReport: document.getElementById('exportReport'),
    copyReport: document.getElementById('copyReport')
};

// Utility Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    const bgColor = type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444';

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${bgColor};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1070;
        transform: translateY(-100px);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        max-width: 300px;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showGradeError(message) {
    // Remove any existing grade error
    const existingError = document.getElementById('grade-error-alert');
    if (existingError) {
        existingError.remove();
    }

    const errorBox = document.createElement("div");
    errorBox.id = 'grade-error-alert';
    errorBox.textContent = message;
    errorBox.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background-color: #e74c3c;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        z-index: 9999;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation keyframes if not already added
    if (!document.getElementById('grade-error-styles')) {
        const style = document.createElement('style');
        style.id = 'grade-error-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(errorBox);

    setTimeout(() => {
        if (errorBox.parentNode) {
            errorBox.remove();
        }
    }, 3000);
}

function showWarningModal(warning, suggestions = []) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1080;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 500px;
        margin: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: scale(0.95);
        transition: transform 0.3s ease;
    `;

    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h3 style="color: #f59e0b; margin: 0; font-size: 1.5rem;">
                ${state.currentLanguage === 'ar' ? 'تحذير' : 'Warning'}
            </h3>
        </div>
        <div style="margin-bottom: 1.5rem; line-height: 1.6;">
            ${warning.message}
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button id="modalOk" style="
                background: #40B5A4;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 600;
            ">
                ${state.currentLanguage === 'ar' ? 'حسناً' : 'OK'}
            </button>
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    // Close modal
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    modal.querySelector('#modalOk').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function showSuggestionsModal(suggestion, originalName) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1080;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 600px;
        margin: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: scale(0.95);
        transition: transform 0.3s ease;
    `;

    const coursesHtml = suggestion.courses.map(course => `
        <button class="suggestion-btn" data-name="${course.name}" data-credits="${course.credits}" style="
            display: block;
            width: 100%;
            text-align: right;
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            padding: 1rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.2s;
        " onmouseover="this.style.borderColor='#40B5A4'" onmouseout="this.style.borderColor='#e2e8f0'">
            <div style="font-weight: 600; margin-bottom: 0.25rem;">${course.name}</div>
            <div style="color: #64748b; font-size: 0.875rem;">
                ${course.credits} ${state.currentLanguage === 'ar' ? 'ساعة معتمدة' : 'credit hours'}
            </div>
        </button>
    `).join('');

    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💡</div>
            <h3 style="color: #40B5A4; margin: 0; font-size: 1.5rem;">
                ${suggestion.message}
            </h3>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <p style="margin-bottom: 1rem; color: #64748b;">
                ${state.currentLanguage === 'ar' 
                    ? `المادة "${originalName}" غير موجودة في قاعدة البيانات. اختر إحدى المواد المشابهة:` 
                    : `Course "${originalName}" not found in database. Choose one of these similar courses:`}
            </p>
            ${coursesHtml}
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button id="continueOriginal" style="
                background: #6b7280;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 600;
            ">
                ${state.currentLanguage === 'ar' ? 'متابعة بالاسم الأصلي' : 'Continue with Original'}
            </button>
            <button id="modalCancel" style="
                background: #e5e7eb;
                color: #374151;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 600;
            ">
                ${state.currentLanguage === 'ar' ? 'إلغاء' : 'Cancel'}
            </button>
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    // Close modal
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    // Handle suggestion selection
    modal.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            elements.courseName.value = btn.dataset.name;
            elements.courseCredits.value = btn.dataset.credits;
            closeModal();
            showNotification(
                state.currentLanguage === 'ar' 
                    ? 'تم تحديث بيانات المادة' 
                    : 'Course data updated'
            );
        });
    });

    // Continue with original name
    modal.querySelector('#continueOriginal').addEventListener('click', () => {
        closeModal();
        // Force add the course with original name
        const credits = parseInt(elements.courseCredits.value) || 0;
        const gradeInput = elements.courseGrade.value.trim();
        const description = elements.courseDescription.value.trim(); // Get description from textarea
        const { accepted, displayGrade } = validateGrade(gradeInput);

        const course = {
            id: Date.now(),
            name: originalName,
            credits,
            gradeInput,
            description, // Add description to the course object
            displayGrade,
            accepted,
            isValidCourse: false,
            category: 'unknown',
            warnings: [{
                type: 'not_found',
                message: state.currentLanguage === 'ar' 
                    ? 'مادة غير معتمدة في قاعدة البيانات' 
                    : 'Course not verified in database'
            }]
        };

        state.courses.push(course);

        // Clear form
        elements.courseName.value = '';
        elements.courseCredits.value = '';
        elements.courseGrade.value = '';


        renderCourses();
        updateCourseCount();

        showNotification(
            state.currentLanguage === 'ar' 
                ? 'تمت إضافة المادة (غير معتمدة) ⚠️' 
                : 'Course added (not verified) ⚠️',
            'warning'
        );
    });

    modal.querySelector('#modalCancel').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0
    }).format(amount);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Language Switching
function switchLanguage() {
    state.currentLanguage = state.currentLanguage === 'ar' ? 'en' : 'ar';
    const newLang = languages[state.currentLanguage];

    // Update document attributes
    document.documentElement.setAttribute('dir', newLang.dir);
    document.documentElement.setAttribute('lang', newLang.lang);

    // Update toggle button text
    elements.langToggle.querySelector('.lang-text').textContent = 
        state.currentLanguage === 'ar' ? 'EN' : 'العربية';

    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-ar][data-en]');
    translatableElements.forEach(element => {
        const key = state.currentLanguage === 'ar' ? 'data-ar' : 'data-en';
        element.textContent = element.getAttribute(key);
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]');
    placeholderElements.forEach(element => {
        const key = state.currentLanguage === 'ar' ? 'data-placeholder-ar' : 'data-placeholder-en';
        element.placeholder = element.getAttribute(key);
    });

    // Update results if calculated
    updateResultsDisplay();

    // Save language preference
    localStorage.setItem('bridging_language', state.currentLanguage);

    showNotification(
        state.currentLanguage === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English'
    );
}

// Course Management
function addCourse() {
    const name = elements.courseName.value.trim();
    const credits = parseInt(elements.courseCredits.value) || 0;
    const gradeInput = elements.courseGrade.value.trim();
    const description = ''; // Set description as empty string for now

    if (!name || !credits || !gradeInput) {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'يرجى ملء جميع الحقول المطلوبة' 
                : 'Please fill all required fields',
            'error'
        );
        return;
    }

    if (credits < 1 || credits > 6) {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'عدد الساعات يجب أن يكون بين 1 و 6' 
                : 'Credit hours must be between 1 and 6',
            'error'
        );
        return;
    }

    // Enhanced grade validation
    const gradeValidation = validateGrade(gradeInput);
    if (!gradeValidation.isValid) {
        const errorMessage = state.currentLanguage === 'ar' 
            ? '⚠️ يرجى إدخال درجة صحيحة (0-100 أو A/B/C/D/F)' 
            : '⚠️ Please enter the correct grade (0-100 or A/B/C/D/F)';

        showGradeError(errorMessage);
        return;
    }

    // Validate course with database
    const validation = validateCourseWithDatabase(name, credits, gradeInput, description);

    // Show warnings for credits and grade mismatches only (require user confirmation)
    if (validation.warnings.length > 0) {
        let shouldContinue = true;

        validation.warnings.forEach(warning => {
            if (warning.type === 'credits' || warning.type === 'grade') {
                const continueMessage = state.currentLanguage === 'ar' 
                    ? '\n\nهل تريد المتابعة بالبيانات المدخلة؟'
                    : '\n\nDo you want to continue with the entered data?';

                const userConfirm = confirm(warning.message + continueMessage);
                if (!userConfirm) {
                    shouldContinue = false;

                    // Auto-correct if user wants
                    if (warning.type === 'credits') {
                        elements.courseCredits.value = warning.correctValue;
                    }
                }
            }
        });

        if (!shouldContinue) return;
    }

    // Show suggestions modal only if course not found and similar courses exist, but still allow adding
    if (validation.suggestions.length > 0 && !validation.isValidCourse) {
        showSuggestionsModal(validation.suggestions[0], name);
        // Don't return here - let the user add the course anyway
    }

    const course = {
        id: Date.now(),
        name,
        credits,
        gradeInput,
        description, // Add description to the course object
        displayGrade: validation.displayGrade,
        accepted: validation.accepted,
        isValidCourse: validation.isValidCourse,
        category: validation.category,
        warnings: validation.warnings
    };

    state.courses.push(course);

    // Clear form
    elements.courseName.value = '';
    elements.courseCredits.value = '';
    elements.courseGrade.value = '';

    renderCourses();
    updateCourseCount();

    // Show success message with appropriate type
    let successMessage, notificationType;
    if (validation.isValidCourse) {
        successMessage = state.currentLanguage === 'ar' ? 'تمت إضافة المادة بنجاح ✓' : 'Course added successfully ✓';
        notificationType = 'success';
    } else {
        successMessage = state.currentLanguage === 'ar' ? 'تمت إضافة المادة المخصصة ✓' : 'Custom course added ✓';
        notificationType = 'success';
    }

    showNotification(successMessage, notificationType);

    // Show warning notifications for any issues (but don't block adding)
    validation.warnings.forEach(warning => {
        if (warning.type === 'not_found') {
            showNotification(warning.message, 'warning');
        }
    });
}

function validateCourseWithDatabase(courseName, credits, gradeInput, description) {
    const normalizedCourseName = courseName.toLowerCase().trim();
    let warnings = [];
    let suggestions = [];

    // Find matching course in database
    const matchingCourseKey = Object.keys(approvedCoursesDB).find(dbCourseName => 
        dbCourseName.toLowerCase() === normalizedCourseName
    );

    let dbCourse = null;
    if (matchingCourseKey) {
        dbCourse = approvedCoursesDB[matchingCourseKey];
    }

    // Check if course not found and try to find similar courses
    if (!dbCourse) {
        const similarByName = findSimilarCourses(normalizedCourseName);

        if (similarByName.length > 0) {
            suggestions.push({
                type: 'similar_courses',
                message: state.currentLanguage === 'ar' 
                    ? '💡 هل تقصد إحدى هذه المواد؟' 
                    : '💡 Did you mean one of these courses?',
                courses: similarByName
            });
        }

        // Add informational warning but don't block
        warnings.push({
            type: 'not_found',
            message: state.currentLanguage === 'ar' 
                ? `ℹ️ المادة "${courseName}" غير موجودة في قاعدة البيانات - سيتم إضافتها كمادة مخصصة` 
                : `ℹ️ Course "${courseName}" not found in database - will be added as custom course`,
        });
    }

    // Check credit hours and grade if a matching course was found
    if (dbCourse) {
        if (credits !== dbCourse.credits) {
            warnings.push({
                type: 'credits',
                message: state.currentLanguage === 'ar' 
                    ? `⚠️ تحذير: عدد الساعات المدخل (${credits}) لا يطابق المعتمد في قاعدة البيانات (${dbCourse.credits})`
                    : `⚠️ Warning: Entered credits (${credits}) don't match database requirement (${dbCourse.credits})`,
                correctValue: dbCourse.credits
            });
        }

        // Validate grade
        const { accepted, displayGrade, numericValue, isValid } = validateGrade(gradeInput);

        if (!isValid) {
            warnings.push({
                type: 'invalid_grade',
                message: state.currentLanguage === 'ar' 
                    ? `⚠️ تحذير: تنسيق الدرجة غير صحيح. استخدم (0-100) أو (A/B/C/D/F)`
                    : `⚠️ Warning: Invalid grade format. Use (0-100) or (A/B/C/D/F)`,
            });
        } else if (numericValue !== null && numericValue < dbCourse.minGrade) {
            warnings.push({
                type: 'grade',
                message: state.currentLanguage === 'ar' 
                    ? `⚠️ تحذير: الدرجة المدخلة (${displayGrade}) أقل من الحد الأدنى المطلوب (${dbCourse.minGrade}%)`
                    : `⚠️ Warning: Entered grade (${displayGrade}) is below minimum requirement (${dbCourse.minGrade}%)`,
                minRequired: dbCourse.minGrade
            });
        }

        return {
            isValidCourse: true,
            warnings,
            suggestions,
            accepted,
            displayGrade,
            category: dbCourse.category
        };
    } else {
        // Course not found - validate grade anyway
        const { accepted, displayGrade, isValid } = validateGrade(gradeInput);

        if (!isValid) {
            warnings.push({
                type: 'invalid_grade',
                message: state.currentLanguage === 'ar' 
                    ? `⚠️ تحذير: تنسيق الدرجة غير صحيح. استخدم (0-100) أو (A/B/C/D/F)`
                    : `⚠️ Warning: Invalid grade format. Use (0-100) or (A/B/C/D/F)`,
            });
        }

        return {
            isValidCourse: false,
            warnings,
            suggestions,
            accepted,
            displayGrade,
            category: 'custom'
        };
    }
}

function calculateDescriptionSimilarity(desc1, desc2) {
    // Simple Jaccard similarity for text descriptions
    const set1 = new Set(desc1.split(/\s+/).filter(Boolean));
    const set2 = new Set(desc2.split(/\s+/).filter(Boolean));

    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);

    return union.size === 0 ? 0 : intersection.size / union.size;
}


function findSimilarCourses(courseName) {
    const searchTerms = courseName.split(/\s+/).filter(term => term.length > 2);
    const similarCourses = [];

    Object.keys(approvedCoursesDB).forEach(dbCourseName => {
        const dbCourseWords = dbCourseName.toLowerCase().split(/\s+/);
        let matchCount = 0;

        searchTerms.forEach(term => {
            if (dbCourseWords.some(word => word.includes(term) || term.includes(word))) {
                matchCount++;
            }
        });

        if (matchCount > 0) {
            similarCourses.push({
                name: dbCourseName,
                credits: approvedCoursesDB[dbCourseName].credits,
                score: matchCount / searchTerms.length
            });
        }
    });

    return similarCourses
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(course => ({ name: course.name, credits: course.credits }));
}

function findSimilarCoursesByDescription(courseDescription) {
    const searchTerms = courseDescription.split(/\s+/).filter(term => term.length > 2);
    const similarCourses = [];

    Object.entries(approvedCoursesDB).forEach(([dbCourseName, courseData]) => {
        if (!courseData.description) return;
        const dbDescriptionWords = courseData.description.toLowerCase().split(/\s+/);
        let matchCount = 0;

        searchTerms.forEach(term => {
            if (dbDescriptionWords.some(word => word.includes(term) || term.includes(word))) {
                matchCount++;
            }
        });

        if (matchCount > 0) {
            similarCourses.push({
                name: dbCourseName,
                credits: courseData.credits,
                score: matchCount / searchTerms.length
            });
        }
    });

    return similarCourses
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(course => ({ name: course.name, credits: course.credits }));
}

function validateGrade(gradeInput) {
    const trimmedInput = gradeInput.trim().toUpperCase();
    let accepted = false;
    let displayGrade = gradeInput;
    let numericValue = null;
    let isValid = true;

    // Check if it's a valid number (0-100)
    const isNumber = /^[0-9]{1,3}$/.test(trimmedInput) && Number(trimmedInput) <= 100;

    // Check if it's a valid letter grade (A, B, C, D, F only)
    const isValidLetter = ["A", "B", "C", "D", "F"].includes(trimmedInput);

    if (!isNumber && !isValidLetter) {
        isValid = false;
        accepted = false;
        displayGrade = gradeInput;
        return { accepted, displayGrade, numericValue, isValid };
    }

    if (isNumber) {
        // Numeric grade (0-100)
        numericValue = Number(trimmedInput);
        accepted = numericValue >= 60;
        displayGrade = `${numericValue}%`;
    } else if (isValidLetter) {
        // Letter grade (A, B, C, D, F only)
        const gradeMapping = {
            'A': 90, 'B': 80, 'C': 70, 'D': 60, 'F': 0
        };

        numericValue = gradeMapping[trimmedInput];
        accepted = numericValue >= 60;
        displayGrade = trimmedInput;
    }

    return { accepted, displayGrade, numericValue, isValid };
}

function removeCourse(courseId) {
    const courseIndex = state.courses.findIndex(course => course.id === courseId);
    if (courseIndex !== -1) {
        state.courses.splice(courseIndex, 1);
        renderCourses();
        updateCourseCount();

        showNotification(
            state.currentLanguage === 'ar' 
                ? 'تم حذف المادة' 
                : 'Course removed'
        );
    }
}

function renderCourses() {
    if (state.courses.length === 0) {
        elements.coursesList.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                </svg>
                <p ${state.currentLanguage === 'ar' ? 'data-ar' : 'data-en'}="${state.currentLanguage === 'ar' ? 'لم يتم إضافة أي مواد بعد' : 'No courses added yet'}">
                    ${state.currentLanguage === 'ar' ? 'لم يتم إضافة أي مواد بعد' : 'No courses added yet'}
                </p>
            </div>
        `;
        return;
    }

    elements.coursesList.innerHTML = state.courses.map(course => {
        const validationIcon = course.isValidCourse ? '✓' : '⚠️';
        const validationColor = course.isValidCourse ? '#10b981' : '#f59e0b';
        const warningsText = course.warnings && course.warnings.length > 0 
            ? course.warnings.map(w => w.message).join('\n')
            : '';

        return `
            <div class="course-item" ${warningsText ? `title="${warningsText}"` : ''}>
                <div class="course-info">
                    <div class="course-name">
                        ${escapeHtml(course.name)}
                        <span style="color: ${validationColor}; margin-left: 0.5rem; font-size: 0.875rem;">${validationIcon}</span>
                    </div>
                    <div class="course-details">
                        ${course.credits} ${state.currentLanguage === 'ar' ? 'ساعة' : 'credits'} • ${escapeHtml(course.displayGrade)}
                        ${course.category && course.category !== 'unknown' ? 
                            ` • <span style="color: #64748b; font-size: 0.75rem;">${course.category}</span>` : ''
                        }
                    </div>
                    ${course.description ? `<div class="course-description-preview" style="font-size: 0.75rem; color: #64748b; margin-top: 0.25rem;">${escapeHtml(course.description.substring(0, 60))}${course.description.length > 60 ? '...' : ''}</div>` : ''}
                </div>
                <div class="course-status ${course.accepted ? 'accepted' : 'rejected'}">
                    ${course.accepted 
                        ? (state.currentLanguage === 'ar' ? 'مقبولة' : 'Accepted')
                        : (state.currentLanguage === 'ar' ? 'مرفوضة' : 'Rejected')
                    }
                </div>
                <button class="delete-btn" onclick="removeCourse(${course.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        `;
    }).join('');
}

function updateCourseCount() {
    elements.courseCount.textContent = state.courses.length;
}

// Calculations
function calculateResults() {
    if (state.courses.length === 0) {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'يرجى إضافة مواد أولاً' 
                : 'Please add courses first',
            'error'
        );
        return;
    }

    const totalPrevious = state.courses.reduce((sum, course) => sum + course.credits, 0);
    const acceptedCredits = state.courses
        .filter(course => course.accepted)
        .reduce((sum, course) => sum + course.credits, 0);
    const remainingCredits = Math.max(0, state.requirement - acceptedCredits);
    const estimatedCost = remainingCredits * state.costPerCredit;

    // Update display
    elements.totalPrevious.textContent = totalPrevious;
    elements.acceptedHours.textContent = acceptedCredits;
    elements.remainingHours.textContent = remainingCredits;
    elements.estimatedCost.textContent = formatCurrency(estimatedCost);

    generateStudyPlan(remainingCredits);

    showNotification(
        state.currentLanguage === 'ar' 
            ? 'تم حساب النتائج بنجاح' 
            : 'Results calculated successfully'
    );
}

function generateStudyPlan(remainingCredits) {
    if (remainingCredits <= 0) {
        elements.studyPlan.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #10b981;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 1rem;">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <h4>${state.currentLanguage === 'ar' ? 'تهانينا!' : 'Congratulations!'}</h4>
                <p>${state.currentLanguage === 'ar' ? 'لقد أكملت جميع المتطلبات الأكاديمية' : 'You have completed all academic requirements'}</p>
            </div>
        `;
        return;
    }

    const maxCreditsPerSemester = 15;
    const semesters = Math.ceil(remainingCredits / maxCreditsPerSemester);
    let planHtml = `
        <div class="plan-summary">
            <h4>${state.currentLanguage === 'ar' ? 'ملخص الخطة:' : 'Plan Summary:'}</h4>
            <p>${state.currentLanguage === 'ar' ? 'العدد المتوقع للفصول:' : 'Expected semesters:'} <strong>${semesters}</strong></p>
            <p>${state.currentLanguage === 'ar' ? 'إجمالي الساعات المتبقية:' : 'Total remaining credits:'} <strong>${remainingCredits}</strong></p>
        </div>
        <div class="plan-details">
            <h4>${state.currentLanguage === 'ar' ? 'التفاصيل:' : 'Details:'}</h4>
    `;

    let remaining = remainingCredits;
    for (let i = 1; i <= semesters; i++) {
        const creditsThisSemester = Math.min(maxCreditsPerSemester, remaining);
        const semesterCost = creditsThisSemester * state.costPerCredit;

        planHtml += `
            <div class="semester-plan">
                <strong>${state.currentLanguage === 'ar' ? 'الفصل' : 'Semester'} ${i}:</strong>
                ${creditsThisSemester} ${state.currentLanguage === 'ar' ? 'ساعة' : 'credits'} 
                (${formatCurrency(semesterCost)})
            </div>
        `;

        remaining -= creditsThisSemester;
    }

    planHtml += '</div>';
    elements.studyPlan.innerHTML = planHtml;
}

function updateResultsDisplay() {
    // Re-render results with current language if already calculated
    if (elements.acceptedHours.textContent !== '0') {
        const remainingCredits = parseInt(elements.remainingHours.textContent);
        generateStudyPlan(remainingCredits);
    }
}

// Session Management
function saveSession() {
    const sessionData = {
        courses: state.courses,
        requirement: state.requirement,
        costPerCredit: state.costPerCredit,
        language: state.currentLanguage,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('bridging_session', JSON.stringify(sessionData));

    showNotification(
        state.currentLanguage === 'ar' 
            ? 'تم حفظ الجلسة بنجاح' 
            : 'Session saved successfully'
    );
}

function loadSession() {
    const sessionData = localStorage.getItem('bridging_session');

    if (!sessionData) {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'لا توجد جلسة محفوظة' 
                : 'No saved session found',
            'error'
        );
        return;
    }

    try {
        const data = JSON.parse(sessionData);
        state.courses = data.courses || [];
        state.requirement = data.requirement || 120;
        state.costPerCredit = data.costPerCredit || 200;

        renderCourses();
        updateCourseCount();

        showNotification(
            state.currentLanguage === 'ar' 
                ? 'تم تحميل الجلسة بنجاح' 
                : 'Session loaded successfully'
        );
    } catch (error) {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'خطأ في تحميل الجلسة' 
                : 'Error loading session',
            'error'
        );
    }
}

function resetAll() {
    const confirmMessage = state.currentLanguage === 'ar' 
        ? 'هل أنت متأكد من حذف جميع البيانات؟' 
        : 'Are you sure you want to delete all data?';

    if (!confirm(confirmMessage)) {
        return;
    }

    state.courses = [];
    renderCourses();
    updateCourseCount();

    // Reset results
    elements.totalPrevious.textContent = '0';
    elements.acceptedHours.textContent = '0';
    elements.remainingHours.textContent = state.requirement;
    elements.estimatedCost.textContent = formatCurrency(0);
    elements.studyPlan.innerHTML = `
        <p>${state.currentLanguage === 'ar' 
            ? 'قم بإضافة المواد أولاً ثم اضغط \'احسب النتائج\'' 
            : 'Add courses first then click \'Calculate Results\''}</p>
    `;

    showNotification(
        state.currentLanguage === 'ar' 
            ? 'تم حذف جميع البيانات' 
            : 'All data deleted'
    );
}

// Export Functions
function exportReport() {
    const reportData = {
        timestamp: new Date().toISOString(),
        language: state.currentLanguage,
        courses: state.courses,
        summary: {
            totalPrevious: parseInt(elements.totalPrevious.textContent),
            acceptedHours: parseInt(elements.acceptedHours.textContent),
            remainingHours: parseInt(elements.remainingHours.textContent),
            estimatedCost: elements.estimatedCost.textContent,
            requirement: state.requirement,
            costPerCredit: state.costPerCredit
        }
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `academic-bridge-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification(
        state.currentLanguage === 'ar' 
            ? 'تم تصدير التقرير' 
            : 'Report exported'
    );
}

function copyReport() {
    const report = state.currentLanguage === 'ar' ? `
تقرير معادلة الساعات الأكاديمية
=====================================

📊 ملخص النتائج:
• إجمالي الساعات السابقة: ${elements.totalPrevious.textContent}
• الساعات المقبولة: ${elements.acceptedHours.textContent}
• الساعات المتبقية: ${elements.remainingHours.textContent}
• التكلفة المتوقعة: ${elements.estimatedCost.textContent}

📚 المواد المضافة:
${state.courses.map(course => 
    `• ${course.name} - ${course.credits} ساعة - ${course.displayGrade} - ${course.accepted ? 'مقبولة' : 'مرفوضة'} - ${course.description ? `الوصف: ${course.description.substring(0, 50)}...` : ''}`
).join('\n')}

📋 الخطة الدراسية:
${elements.studyPlan.textContent}

تم إنشاء التقرير في: ${new Date().toLocaleString('ar-SA')}
    ` : `
Academic Credit Equivalency Report
=====================================

📊 Results Summary:
• Total Previous Hours: ${elements.totalPrevious.textContent}
• Accepted Hours: ${elements.acceptedHours.textContent}
• Remaining Hours: ${elements.remainingHours.textContent}
• Expected Cost: ${elements.estimatedCost.textContent}

📚 Added Courses:
${state.courses.map(course => 
    `• ${course.name} - ${course.credits} credits - ${course.displayGrade} - ${course.accepted ? 'Accepted' : 'Rejected'} - ${course.description ? `Description: ${course.description.substring(0, 50)}...` : ''}`
).join('\n')}

📋 Study Plan:
${elements.studyPlan.textContent}

Report generated on: ${new Date().toLocaleString('en-US')}
    `;

    navigator.clipboard.writeText(report).then(() => {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'تم نسخ التقرير إلى الحافظة' 
                : 'Report copied to clipboard'
        );
    }).catch(() => {
        showNotification(
            state.currentLanguage === 'ar' 
                ? 'فشل في نسخ التقرير' 
                : 'Failed to copy report',
            'error'
        );
    });
}

// Navigation
function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
}

// Autocomplete functionality
function initializeAutocomplete() {
    const courseInput = elements.courseName;
    const autocompleteDiv = document.getElementById('courseAutocomplete');
    let selectedIndex = -1;

    if (!courseInput || !autocompleteDiv) return;

    courseInput.addEventListener('input', (e) => {
        const value = e.target.value.trim().toLowerCase();
        selectedIndex = -1;

        if (value.length < 2) {
            autocompleteDiv.style.display = 'none';
            return;
        }

        const matches = Object.keys(approvedCoursesDB).filter(courseName =>
            courseName.toLowerCase().includes(value)
        ).slice(0, 5);

        if (matches.length === 0) {
            autocompleteDiv.style.display = 'none';
            return;
        }

        const items = matches.map((courseName, index) => {
            const course = approvedCoursesDB[courseName];
            return `
                <div class="autocomplete-item" data-index="${index}" data-name="${courseName}" data-credits="${course.credits}">
                    <div class="autocomplete-course-name">${courseName}</div>
                    <div class="autocomplete-course-details">
                        ${course.credits} ${state.currentLanguage === 'ar' ? 'ساعة معتمدة' : 'credit hours'} • 
                        ${state.currentLanguage === 'ar' ? 'الحد الأدنى:' : 'Min grade:'} ${course.minGrade}%
                    </div>
                </div>
            `;
        }).join('');

        autocompleteDiv.innerHTML = items;
        autocompleteDiv.style.display = 'block';

        // Add click listeners
        autocompleteDiv.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', () => {
                courseInput.value = item.dataset.name;
                elements.courseCredits.value = item.dataset.credits;
                autocompleteDiv.style.display = 'none';
                elements.courseGrade.focus();
            });
        });
    });

    courseInput.addEventListener('keydown', (e) => {
        const items = autocompleteDiv.querySelectorAll('.autocomplete-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            const selectedItem = items[selectedIndex];
            courseInput.value = selectedItem.dataset.name;
            elements.courseCredits.value = selectedItem.dataset.credits;
            autocompleteDiv.style.display = 'none';
            elements.courseGrade.focus();
        } else if (e.key === 'Escape') {
            autocompleteDiv.style.display = 'none';
        }
    });

    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    // Hide autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        if (!courseInput.contains(e.target) && !autocompleteDiv.contains(e.target)) {
            autocompleteDiv.style.display = 'none';
        }
    });
}

// Event Listeners
function initializeEventListeners() {
    // Language toggle
    elements.langToggle?.addEventListener('click', switchLanguage);

    // Navigation
    elements.navToggle?.addEventListener('click', toggleMobileMenu);

    // Course management
    elements.addCourse?.addEventListener('click', addCourse);

    // Initialize autocomplete
    initializeAutocomplete();

    // Enter key support for form inputs
    [elements.courseName, elements.courseCredits, elements.courseGrade].forEach(element => {
        element?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent default form submission on Enter
                addCourse();
            }
        });
    });

    // Calculator actions
    elements.calculateBtn?.addEventListener('click', calculateResults);
    elements.saveSession?.addEventListener('click', saveSession);
    elements.loadSession?.addEventListener('click', loadSession);
    elements.resetAll?.addEventListener('click', resetAll);

    // Export actions
    elements.exportReport?.addEventListener('click', exportReport);
    elements.copyReport?.addEventListener('click', copyReport);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            elements.navMenu?.classList.remove('active');
        });
    });
}

// Initialization
function initializeApp() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('bridging_language');
    if (savedLanguage && languages[savedLanguage]) {
        state.currentLanguage = savedLanguage;
        const newLang = languages[state.currentLanguage];
        document.documentElement.setAttribute('dir', newLang.dir);
        document.documentElement.setAttribute('lang', newLang.lang);

        // Update toggle button
        elements.langToggle.querySelector('.lang-text').textContent = 
            state.currentLanguage === 'ar' ? 'EN' : 'العربية';

        // Update translatable elements
        const translatableElements = document.querySelectorAll('[data-ar][data-en]');
        translatableElements.forEach(element => {
            const key = state.currentLanguage === 'ar' ? 'data-ar' : 'data-en';
            element.textContent = element.getAttribute(key);
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]');
        placeholderElements.forEach(element => {
            const key = state.currentLanguage === 'ar' ? 'data-placeholder-ar' : 'data-placeholder-en';
            element.placeholder = element.getAttribute(key);
        });
    }

    // Initialize UI
    renderCourses();
    updateCourseCount();
    initializeEventListeners();

    // Load session if available
    const savedSession = localStorage.getItem('bridging_session');
    if (savedSession) {
        try {
            const data = JSON.parse(savedSession);
            if (data.courses && data.courses.length > 0) {
                // Auto-load session if it exists
                loadSession();
            }
        } catch (error) {
            console.log('Error auto-loading session:', error);
        }
    }

    console.log('Academic Bridge Platform initialized successfully');
}

// Global functions (for onclick handlers)
window.scrollToSection = scrollToSection;
window.removeCourse = removeCourse;

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
