/**
 * AttenSync - WhatsApp Attendance Tracker
 * Client-side Logic & State Management
 */

// Default Student Roster (B.Tech. Sem-V Complete - 63 Students)
const DEFAULT_STUDENTS = [
    { id: '1', roll: '2409001', name: 'Aaditya Malik', present: true },
    { id: '2', roll: '2409002', name: 'Aayush Kumar Sharma', present: true },
    { id: '3', roll: '2409003', name: 'Abhijeet', present: true },
    { id: '4', roll: '2409004', name: 'Abhishek Kumar', present: true },
    { id: '5', roll: '2409005', name: 'Aditya Vishwakarma', present: true },
    { id: '6', roll: '2409006', name: 'Aman Kumar Gond', present: true },
    { id: '7', roll: '2409007', name: 'Aman Paswan', present: true },
    { id: '8', roll: '2409008', name: 'Amardeep Prabhakar', present: true },
    { id: '9', roll: '2409009', name: 'Amber Kaushik', present: true },
    { id: '10', roll: '2409010', name: 'Anshika Pal', present: true },
    { id: '11', roll: '2409011', name: 'Anushkamini', present: true },
    { id: '12', roll: '2409012', name: 'Arfa Khan', present: true },
    { id: '13', roll: '2409013', name: 'Devansh Bharti', present: true },
    { id: '14', roll: '2409014', name: 'Divyansh Awasthi', present: true },
    { id: '15', roll: '2409015', name: 'Hemant Kumar', present: true },
    { id: '16', roll: '2409016', name: 'Himanshu Yadav', present: true },
    { id: '17', roll: '2409017', name: 'Kanishka Srivastava', present: true },
    { id: '18', roll: '2409018', name: 'Kapil Gautam', present: true },
    { id: '19', roll: '2409019', name: 'Khushbu', present: true },
    { id: '20', roll: '2409020', name: 'Nitya Sahu', present: true },
    { id: '21', roll: '2409021', name: 'Pappu Murmu', present: true },
    { id: '22', roll: '2409022', name: 'Prashant Kumar', present: true },
    { id: '23', roll: '2409023', name: 'Priyank Verma', present: true },
    { id: '24', roll: '2409024', name: 'Samir Yadav', present: true },
    { id: '25', roll: '2409025', name: 'Shradul Kumar', present: true },
    { id: '26', roll: '2409026', name: 'Shreya Mishra', present: true },
    { id: '27', roll: '2409027', name: 'Shubham Rawat', present: true },
    { id: '28', roll: '2409028', name: 'Surbhi Verma', present: true },
    { id: '29', roll: '2409029', name: 'Surya Pratap Singh', present: true },
    { id: '30', roll: '2409030', name: 'Swastik Sinha', present: true },
    { id: '31', roll: '2409031', name: 'Utkarsh Pratap Singh', present: true },
    { id: '32', roll: '2409032', name: 'Utkarsh Rawat', present: true },
    { id: '33', roll: '2409033', name: 'Aditya Kushwaha', present: true },
    { id: '34', roll: '2409034', name: 'Ajeet Kumar Rav', present: true },
    { id: '35', roll: '2409035', name: 'Akshat Jaiswal', present: true },
    { id: '36', roll: '2409036', name: 'Ankit Rajpoot', present: true },
    { id: '37', roll: '2409037', name: 'Ansh Nirala', present: true },
    { id: '38', roll: '2409038', name: 'Anshika Bajpai', present: true },
    { id: '39', roll: '2409039', name: 'Ashutosh Kumar Srivastav', present: true },
    { id: '40', roll: '2409040', name: 'Ashvan', present: true },
    { id: '41', roll: '2409042', name: 'Divya Mishra', present: true },
    { id: '42', roll: '2409043', name: 'Divyansh Kumar', present: true },
    { id: '43', roll: '2409044', name: 'Divyansh Verma', present: true },
    { id: '44', roll: '2409045', name: 'Harshit Gupta', present: true },
    { id: '45', roll: '2409046', name: 'Jaydeep Kannaujiya', present: true },
    { id: '46', roll: '2409047', name: 'Krishay Verma', present: true },
    { id: '47', roll: '2409048', name: 'Maheshwari Verma', present: true },
    { id: '48', roll: '2409049', name: 'Mukesh Kumar Gond', present: true },
    { id: '49', roll: '2409050', name: 'Om Parkash', present: true },
    { id: '50', roll: '2409051', name: 'Parmit Karmali', present: true },
    { id: '51', roll: '2409052', name: 'Pranjal Singh', present: true },
    { id: '52', roll: '2409053', name: 'Prince Kumar', present: true },
    { id: '53', roll: '2409054', name: 'Prisha Srivastava', present: true },
    { id: '54', roll: '2409055', name: 'Rishabh Kumar', present: true },
    { id: '55', roll: '2409056', name: 'Shashwat Raj', present: true },
    { id: '56', roll: '2409057', name: 'Shivam', present: true },
    { id: '57', roll: '2409058', name: 'Vaibhav Raj Yadav', present: true },
    { id: '58', roll: '2409059', name: 'Vivek Chaurasiya', present: true },
    { id: '59', roll: '2409061', name: 'Abhishek Rawat', present: true },
    { id: '60', roll: '2509101', name: 'Krishan Kant', present: true },
    { id: '61', roll: '2509102', name: 'Mohd Usmaan Khan', present: true },
    { id: '62', roll: '2509103', name: 'Neha Sharma', present: true },
    { id: '63', roll: '2509104', name: 'Saurabh Mishra', present: true }
];

// App State
let appState = {
    students: [],
    activeFilter: 'all',
    sortBy: 'roll-asc',
    searchQuery: '',
    metadata: {
        className: 'CS-A 3rd Year',
        date: new Date().toISOString().split('T')[0],
        teacherName: '',
        sessionTiming: 'Morning Session',
        waPhone: ''
    },
    formatOptions: {
        includePresent: true,
        includeAbsent: true,
        compactFormat: false
    }
};

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromStorage();
    initTheme();
    bindEvents();
    renderAll();
});

// Load saved data or initialize defaults
function loadStateFromStorage() {
    const savedStudents = localStorage.getItem('attensync_students');
    if (savedStudents) {
        try {
            appState.students = JSON.parse(savedStudents);
        } catch (e) {
            appState.students = [...DEFAULT_STUDENTS];
        }
    } else {
        appState.students = [...DEFAULT_STUDENTS];
    }

    // Ensure all student names use proper Title Case capitalization
    appState.students.forEach(s => {
        if (s.name) s.name = formatTitleCase(s.name);
    });

    const savedMeta = localStorage.getItem('attensync_metadata');
    if (savedMeta) {
        try {
            appState.metadata = { ...appState.metadata, ...JSON.parse(savedMeta) };
        } catch (e) {}
    }

    // Set today's date if not saved
    const dateInput = document.getElementById('attendanceDate');
    if (dateInput) {
        dateInput.value = appState.metadata.date || new Date().toISOString().split('T')[0];
    }

    const classNameInput = document.getElementById('classNameInput');
    if (classNameInput) classNameInput.value = appState.metadata.className;

    const teacherNameInput = document.getElementById('teacherNameInput');
    if (teacherNameInput) teacherNameInput.value = appState.metadata.teacherName || '';

    const sessionTimingInput = document.getElementById('sessionTimingInput');
    if (sessionTimingInput) sessionTimingInput.value = appState.metadata.sessionTiming || '';

    const waPhoneInput = document.getElementById('waPhoneInput');
    if (waPhoneInput) waPhoneInput.value = appState.metadata.waPhone || '';
}

// Save state to LocalStorage
function saveStateToStorage() {
    localStorage.setItem('attensync_students', JSON.stringify(appState.students));
    localStorage.setItem('attensync_metadata', JSON.stringify(appState.metadata));
}

// Theme handling
function initTheme() {
    const savedTheme = localStorage.getItem('attensync_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}

function toggleTheme() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('attensync_theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('attensync_theme', 'light');
    }
}

// Timetable presets dictionary for B.Tech. Sem-V (RN-08)
const TIMETABLE_SLOTS = {
    mon_1030: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-501', teacher: 'Dr. Vandana Pandey', timing: '10:30 AM - 11:30 AM' },
    mon_1130: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-501', teacher: 'Dr. Sanjay Kumar Th', timing: '11:30 AM - 12:30 PM' },
    mon_1430: { subject: 'B.Tech Sem-V (RN-08) - PLC CS-554', teacher: 'Dr. Vandana Pandey', timing: '02:30 PM - 03:30 PM' },
    mon_1630: { subject: 'B.Tech Sem-V (RN-08) - MC-506', teacher: 'Dr. Arti Maurya', timing: '04:30 PM - 05:30 PM' },

    tue_0930: { subject: 'B.Tech Sem-V (RN-08) - ESC-501', teacher: 'Dr. Vivek Shukla', timing: '09:30 AM - 10:30 AM' },
    tue_1030: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-504', teacher: 'Dr. Vandana Pandey', timing: '10:30 AM - 11:30 AM' },
    tue_1130: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-502 / PLC CS-552', teacher: 'Dr. Arti Maurya', timing: '11:30 AM - 12:30 PM' },
    tue_1230: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-503 / ELC-351', teacher: 'Dr. Vandana Pandey / Dr. Vivek Shukla', timing: '12:30 PM - 01:30 PM' },
    tue_1630: { subject: 'B.Tech Sem-V (RN-08) - MC-506', teacher: 'Dr. Sanjay Kumar Th', timing: '04:30 PM - 05:30 PM' },

    wed_0930: { subject: 'B.Tech Sem-V (RN-08) - ESC-501', teacher: 'Dr. Vivek Shukla', timing: '09:30 AM - 10:30 AM' },
    wed_1030: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-502', teacher: 'Dr. Vandana Pandey', timing: '10:30 AM - 11:30 AM' },
    wed_1130: { subject: 'B.Tech Sem-V (RN-08) - HSMC-505', teacher: 'Dr. Vivek Shukla', timing: '11:30 AM - 12:30 PM' },
    wed_1430: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-503', teacher: 'Dr. Sanjay Kumar Th', timing: '02:30 PM - 03:30 PM' },
    wed_1530: { subject: 'B.Tech Sem-V (RN-08) - ECS-077', teacher: '', timing: '03:30 PM - 04:30 PM' },
    wed_1630: { subject: 'B.Tech Sem-V (RN-08) - ECS-752', teacher: 'Dr. Vivek Shukla', timing: '04:30 PM - 05:30 PM' },

    thu_0930: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-503', teacher: 'Dr. Sanjay Kumar Th', timing: '09:30 AM - 10:30 AM' },
    thu_1030: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-502', teacher: 'Dr. Vandana Pandey', timing: '10:30 AM - 11:30 AM' },
    thu_1130: { subject: 'B.Tech Sem-V (RN-08) - HSMC-505', teacher: 'Dr. Arti Maurya', timing: '11:30 AM - 12:30 PM' },
    thu_1230: { subject: 'B.Tech Sem-V (RN-08) - PLC CS-551', teacher: 'Dr. Vandana Pandey', timing: '12:30 PM - 01:30 PM' },
    thu_1430: { subject: 'B.Tech Sem-V (RN-08) - PLC CS-554', teacher: 'Dr. Vandana Pandey', timing: '02:30 PM - 03:30 PM' },
    thu_1530: { subject: 'B.Tech Sem-V (RN-08) - ESC-501', teacher: 'Dr. Vivek Shukla', timing: '03:30 PM - 04:30 PM' },

    fri_1030: { subject: 'B.Tech Sem-V (RN-08) - PCC CS-504', teacher: 'Dr. Vandana Pandey', timing: '10:30 AM - 11:30 AM' },
    fri_1130: { subject: 'B.Tech Sem-V (RN-08) - HSMC-505', teacher: 'Dr. Arti Maurya', timing: '11:30 AM - 12:30 PM' },
    fri_1230: { subject: 'B.Tech Sem-V (RN-08) - PLC CS-552', teacher: 'Dr. Vivek Shukla', timing: '12:30 PM - 01:30 PM' },
    fri_1430: { subject: 'B.Tech Sem-V (RN-08) - Hobby Club Classes', teacher: '', timing: '02:30 PM - 03:30 PM' },
    fri_1530: { subject: 'B.Tech Sem-V (RN-08) - Hobby Club Classes', teacher: '', timing: '03:30 PM - 04:30 PM' },
    fri_1630: { subject: 'B.Tech Sem-V (RN-08) - ECS-752', teacher: '', timing: '04:30 PM - 05:30 PM' }
};

// Event Listeners Registration
function bindEvents() {
    // Theme Toggle
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

    // Timetable quick select
    const timetableSelect = document.getElementById('timetableSelect');
    if (timetableSelect) {
        timetableSelect.addEventListener('change', (e) => {
            const slotKey = e.target.value;
            if (slotKey && TIMETABLE_SLOTS[slotKey]) {
                const slot = TIMETABLE_SLOTS[slotKey];
                
                appState.metadata.className = slot.subject;
                appState.metadata.teacherName = slot.teacher;
                appState.metadata.sessionTiming = slot.timing;

                document.getElementById('classNameInput').value = slot.subject;
                document.getElementById('teacherNameInput').value = slot.teacher;
                document.getElementById('sessionTimingInput').value = slot.timing;

                saveStateToStorage();
                updateWhatsappMessage();
                showToast(`Loaded ${slot.subject}!`);
            }
        });
    }

    // Metadata inputs
    document.getElementById('classNameInput').addEventListener('input', (e) => {
        appState.metadata.className = e.target.value;
        saveStateToStorage();
        updateWhatsappMessage();
    });

    document.getElementById('attendanceDate').addEventListener('change', (e) => {
        appState.metadata.date = e.target.value;
        saveStateToStorage();
        updateWhatsappMessage();
    });

    document.getElementById('teacherNameInput').addEventListener('input', (e) => {
        appState.metadata.teacherName = e.target.value;
        saveStateToStorage();
        updateWhatsappMessage();
    });

    document.getElementById('sessionTimingInput').addEventListener('input', (e) => {
        appState.metadata.sessionTiming = e.target.value;
        saveStateToStorage();
        updateWhatsappMessage();
    });

    document.getElementById('waPhoneInput').addEventListener('input', (e) => {
        appState.metadata.waPhone = e.target.value;
        saveStateToStorage();
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value.toLowerCase().trim();
        clearSearchBtn.style.display = appState.searchQuery ? 'block' : 'none';
        renderStudentList();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        appState.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderStudentList();
    });

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            appState.activeFilter = e.target.dataset.filter;
            renderStudentList();
        });
    });

    // Sort select handler
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            appState.sortBy = e.target.value;
            renderStudentList();
        });
    }

    // Batch Action Buttons
    document.getElementById('selectAllBtn').addEventListener('click', () => {
        setAllPresence(true);
    });

    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        setAllPresence(false);
    });

    document.getElementById('invertSelectionBtn').addEventListener('click', () => {
        invertPresence();
    });

    // Format Options Checkboxes
    document.getElementById('optIncludePresent').addEventListener('change', (e) => {
        appState.formatOptions.includePresent = e.target.checked;
        updateWhatsappMessage();
    });

    document.getElementById('optIncludeAbsent').addEventListener('change', (e) => {
        appState.formatOptions.includeAbsent = e.target.checked;
        updateWhatsappMessage();
    });

    document.getElementById('optCompactFormat').addEventListener('change', (e) => {
        appState.formatOptions.compactFormat = e.target.checked;
        updateWhatsappMessage();
    });

    // WhatsApp & Copy Buttons
    document.getElementById('sendWhatsappBtn').addEventListener('click', sendToWhatsapp);
    document.getElementById('copyMessageBtn').addEventListener('click', copyWhatsappMessage);

    const mobileSendBtn = document.getElementById('mobileSendWhatsappBtn');
    if (mobileSendBtn) mobileSendBtn.addEventListener('click', sendToWhatsapp);

    const mobileCopyBtn = document.getElementById('mobileCopyMessageBtn');
    if (mobileCopyBtn) mobileCopyBtn.addEventListener('click', copyWhatsappMessage);

    // Roster Management Modal
    const rosterModal = document.getElementById('rosterModal');
    document.getElementById('manageRosterBtn').addEventListener('click', () => {
        rosterModal.style.display = 'flex';
    });

    document.getElementById('closeModalBtn').addEventListener('click', () => {
        rosterModal.style.display = 'none';
    });

    rosterModal.addEventListener('click', (e) => {
        if (e.target === rosterModal) {
            rosterModal.style.display = 'none';
        }
    });

    // Modal Add Student
    document.getElementById('addStudentBtn').addEventListener('click', handleAddSingleStudent);

    // Modal Bulk Import
    document.getElementById('importBulkBtn').addEventListener('click', handleBulkImport);

    // Modal Reset Roster
    document.getElementById('resetDefaultRosterBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset to the default sample roster? Custom changes will be lost.')) {
            appState.students = [...DEFAULT_STUDENTS];
            saveStateToStorage();
            renderAll();
            rosterModal.style.display = 'none';
            showToast('Reset to default sample roster!');
        }
    });
}

// Batch Actions Logic
function setAllPresence(status) {
    const visibleStudents = getFilteredStudents();
    const visibleIds = new Set(visibleStudents.map(s => s.id));
    
    appState.students.forEach(s => {
        if (visibleIds.has(s.id)) {
            s.present = status;
        }
    });
    
    saveStateToStorage();
    renderAll();
    showToast(status ? 'Marked visible students as Present' : 'Cleared visible students');
}

function invertPresence() {
    const visibleStudents = getFilteredStudents();
    const visibleIds = new Set(visibleStudents.map(s => s.id));

    appState.students.forEach(s => {
        if (visibleIds.has(s.id)) {
            s.present = !s.present;
        }
    });

    saveStateToStorage();
    renderAll();
    showToast('Inverted student attendance selection');
}

// Toggle individual student presence
function toggleStudentPresence(id) {
    const student = appState.students.find(s => s.id === id);
    if (student) {
        student.present = !student.present;
        saveStateToStorage();
        renderAll();
    }
}

// Remove student from roster
function deleteStudent(id, e) {
    e.stopPropagation();
    if (confirm('Remove this student from the class roster?')) {
        appState.students = appState.students.filter(s => s.id !== id);
        saveStateToStorage();
        renderAll();
        showToast('Student removed from roster');
    }
}

// Filtered & Sorted Students Calculator
function getFilteredStudents() {
    let result = appState.students.filter(student => {
        // Filter by tab
        if (appState.activeFilter === 'present' && !student.present) return false;
        if (appState.activeFilter === 'absent' && student.present) return false;

        // Filter by search query
        if (appState.searchQuery) {
            const query = appState.searchQuery;
            const matchName = student.name.toLowerCase().includes(query);
            const matchRoll = student.roll.toLowerCase().includes(query);
            return matchName || matchRoll;
        }

        return true;
    });

    // Apply Sorting
    const sortMode = appState.sortBy || 'roll-asc';
    result.sort((a, b) => {
        if (sortMode === 'roll-asc') {
            return a.roll.localeCompare(b.roll, undefined, { numeric: true });
        } else if (sortMode === 'roll-desc') {
            return b.roll.localeCompare(a.roll, undefined, { numeric: true });
        } else if (sortMode === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortMode === 'name-desc') {
            return b.name.localeCompare(a.name);
        } else if (sortMode === 'status-absent') {
            if (a.present === b.present) {
                return a.roll.localeCompare(b.roll, undefined, { numeric: true });
            }
            return a.present ? 1 : -1;
        } else if (sortMode === 'status-present') {
            if (a.present === b.present) {
                return a.roll.localeCompare(b.roll, undefined, { numeric: true });
            }
            return a.present ? -1 : 1;
        }
        return 0;
    });

    return result;
}

// Render Functions
function renderAll() {
    renderStudentList();
    renderStats();
    updateWhatsappMessage();
}

function renderStats() {
    const total = appState.students.length;
    const present = appState.students.filter(s => s.present).length;
    const absent = total - present;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statPresent').textContent = present;
    document.getElementById('statAbsent').textContent = absent;
    document.getElementById('statPercent').textContent = `${percentage}%`;
    document.getElementById('statProgressBar').style.width = `${percentage}%`;
}

function renderStudentList() {
    const container = document.getElementById('studentList');
    const filtered = getFilteredStudents();
    const countLabel = document.getElementById('matchingCountLabel');

    countLabel.textContent = `Showing ${filtered.length} of ${appState.students.length} students`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <p>No students match your search or filter.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(student => `
        <div class="student-item ${student.present ? 'is-present' : ''}" onclick="toggleStudentPresence('${student.id}')">
            <div class="student-item-left">
                <input type="checkbox" class="student-checkbox" ${student.present ? 'checked' : ''} onclick="event.stopPropagation(); toggleStudentPresence('${student.id}')">
                <span class="student-roll">#${escapeHtml(student.roll)}</span>
                <span class="student-name">${escapeHtml(student.name)}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span class="status-badge ${student.present ? 'present' : 'absent'}">
                    ${student.present ? 'Present' : 'Absent'}
                </span>
                <button class="btn btn-icon btn-sm" style="width:28px; height:28px; border:none; background:transparent; opacity:0.5;" title="Remove Student" onclick="deleteStudent('${student.id}', event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        </div>
    `).join('');
}

// Generate Formatted WhatsApp Message Text
function generateWhatsappText() {
    const presentList = appState.students.filter(s => s.present);
    const absentList = appState.students.filter(s => !s.present);
    const total = appState.students.length;
    const percentage = total > 0 ? Math.round((presentList.length / total) * 100) : 0;

    // Formatting date
    let formattedDate = appState.metadata.date;
    if (formattedDate) {
        try {
            const d = new Date(formattedDate);
            formattedDate = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        } catch(e) {}
    }

    let text = `*ATTENDANCE REPORT*\n`;
    text += `-------------------------------------\n`;
    text += `*Class:* ${appState.metadata.className || 'N/A'}\n`;
    text += `*Date:* ${formattedDate || 'Today'}\n`;
    if (appState.metadata.sessionTiming) text += `*Timing:* ${appState.metadata.sessionTiming}\n`;
    if (appState.metadata.teacherName) text += `*Faculty:* ${appState.metadata.teacherName}\n`;
    
    text += `\n*SUMMARY*\n`;
    text += `• Total Strength: ${total}\n`;
    text += `• Present: ${presentList.length}\n`;
    text += `• Absent: ${absentList.length}\n`;
    text += `• Attendance Rate: ${percentage}%\n`;

    if (appState.formatOptions.includePresent) {
        text += `\n*PRESENT STUDENTS (${presentList.length}):*\n`;
        if (presentList.length === 0) {
            text += `None\n`;
        } else if (appState.formatOptions.compactFormat) {
            text += presentList.map(s => `#${s.roll}`).join(', ') + `\n`;
        } else {
            text += presentList.map((s, idx) => `${idx + 1}. [${s.roll}] ${s.name}`).join('\n') + `\n`;
        }
    }

    if (appState.formatOptions.includeAbsent) {
        text += `\n*ABSENT STUDENTS (${absentList.length}):*\n`;
        if (absentList.length === 0) {
            text += `None (100% Attendance)\n`;
        } else if (appState.formatOptions.compactFormat) {
            text += absentList.map(s => `#${s.roll}`).join(', ') + `\n`;
        } else {
            text += absentList.map((s, idx) => `${idx + 1}. [${s.roll}] ${s.name}`).join('\n') + `\n`;
        }
    }

    return text.trim();
}

function updateWhatsappMessage() {
    const text = generateWhatsappText();
    const textarea = document.getElementById('whatsappMessageText');
    if (textarea) {
        textarea.value = text;
    }
}

// Share via WhatsApp URL Schema
function sendToWhatsapp() {
    const message = generateWhatsappText();
    const encodedMessage = encodeURIComponent(message);
    let waUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    const phone = appState.metadata.waPhone ? appState.metadata.waPhone.replace(/[^0-9]/g, '') : '';
    if (phone) {
        waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    }

    window.open(waUrl, '_blank');
    showToast('Opening WhatsApp...');
}

// Copy to Clipboard with fallback
function copyWhatsappMessage() {
    const message = generateWhatsappText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(message)
            .then(() => showToast('Attendance report copied to clipboard!'))
            .catch(() => fallbackCopy(message));
    } else {
        fallbackCopy(message);
    }
}

function fallbackCopy(text) {
    const textarea = document.getElementById('whatsappMessageText');
    textarea.select();
    document.execCommand('copy');
    showToast('Copied to clipboard!');
}

// Modal Handlers
function handleAddSingleStudent() {
    const rollInput = document.getElementById('newRollInput');
    const nameInput = document.getElementById('newNameInput');

    const roll = rollInput.value.trim();
    const name = nameInput.value.trim();

    if (!roll || !name) {
        alert('Please enter both Roll Number and Student Name.');
        return;
    }

    const newStudent = {
        id: Date.now().toString(),
        roll: roll,
        name: formatTitleCase(name),
        present: true
    };

    appState.students.push(newStudent);
    // Sort students by roll number
    appState.students.sort((a, b) => a.roll.localeCompare(b.roll, undefined, { numeric: true }));

    saveStateToStorage();
    renderAll();

    rollInput.value = '';
    nameInput.value = '';
    showToast(`Added ${newStudent.name} to roster!`);
}

function handleBulkImport() {
    const textarea = document.getElementById('bulkImportTextarea');
    const content = textarea.value.trim();

    if (!content) {
        alert('Please enter student data to import.');
        return;
    }

    const lines = content.split('\n');
    let importedCount = 0;
    const newStudents = [];

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        let roll = '';
        let name = '';

        if (trimmed.includes(',')) {
            const parts = trimmed.split(',');
            roll = parts[0].trim();
            name = parts.slice(1).join(',').trim();
        } else if (trimmed.includes('.')) {
            const parts = trimmed.split('.');
            roll = parts[0].trim();
            name = parts.slice(1).join('.').trim();
        } else {
            const parts = trimmed.split(/\s+/);
            if (parts.length > 1) {
                roll = parts[0];
                name = parts.slice(1).join(' ');
            } else {
                roll = `${100 + index + 1}`;
                name = trimmed;
            }
        }

        if (name) {
            newStudents.push({
                id: (Date.now() + index).toString(),
                roll: roll || `${index + 1}`,
                name: formatTitleCase(name),
                present: true
            });
            importedCount++;
        }
    });

    if (newStudents.length > 0) {
        if (confirm(`Import ${importedCount} students and replace existing roster? (Click Cancel to append to current roster)`)) {
            appState.students = newStudents;
        } else {
            appState.students = [...appState.students, ...newStudents];
        }

        appState.students.sort((a, b) => a.roll.localeCompare(b.roll, undefined, { numeric: true }));
        saveStateToStorage();
        renderAll();
        textarea.value = '';
        document.getElementById('rosterModal').style.display = 'none';
        showToast(`Imported ${importedCount} students successfully!`);
    } else {
        alert('Could not parse any valid student names from input.');
    }
}

// Toast notification helper
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// Helper to convert names to proper Title Case (e.g. "aman paswan" -> "Aman Paswan")
function formatTitleCase(str) {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Helper to escape HTML special characters
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
