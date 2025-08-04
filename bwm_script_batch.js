

// 定義構面和因素
const dimensions = {
    A: { name: "科技機會主義", description: "利用新技術所帶來的機會，來推動組織的創新與成長。" },
    B: { name: "資源管弦化", description: "有效配置和整合資源以提升組織效率和能力。" },
    C: { name: "IT人員能力", description: "IT專業人員的技術和行為技能，用於支持和推動企業變革。" },
    D: { name: "數位轉型", description: "透過技術革新來重塑企業運營和商業模式，以提高競爭力。" },
    E: { name: "組織機動性", description: "企業快速適應市場變化和抓住機遇的能力。" }
};

const factors = {
    a1: { 
        name: "科技偵測能力", 
        dimension: "A", 
        description: "指企業能夠識別、理解並反應其所處環境中出現的技術變化的能力。",
        examples: [
            "公司通常很敏感可能影響業務的科技進展。",
            "公司主動尋求可能影響業務的科技進展情報。",
            "公司定期檢視科技變革對業務的影響。"
        ]
    },
    a2: { 
        name: "科技回應能力", 
        dimension: "A", 
        description: "指企業在識別和理解技術變化後，能夠迅速且有效地調整其資源和業務流程以適應這些技術變革的能力。",
        examples: [
            "公司通常快速回應外在科技變革。",
            "公司的業務單位對新科技的回應不落人後。",
            "公司不會藉故緩慢回應科技進展。"
        ]
    },
    b1: { 
        name: "建構資源", 
        dimension: "B", 
        description: "指企業如何有效地配置和組織其內部資源，支持組織目標的實現。",
        examples: [
            "公司從科技服務供應商採購有價值的數位資源。",
            "公司自行發展有值價的數位資源。",
            "公司善用有價值的數位資源。"
        ]
    },
    b2: { 
        name: "組合資源", 
        dimension: "B", 
        description: "指企業將不同的資源(如人力、技術、財務資源等)進行整合和協同，以達到最大化價值的過程。",
        examples: [
            "公司整合現有數位資源逐步改善營運能力。",
            "公司整合現有數位資源擴充營運能力。",
            "公司整合現有數位資源創造改善競爭優勢的新能力。"
        ]
    },
    b3: { 
        name: "善用資源", 
        dimension: "B", 
        description: "指企業在運營過程中，將現有資源的價值最大化，並利用這些資源來支持戰略目標的達成。",
        examples: [
            "公司善用數位資源以確認為了爭取商機必須具備的彈性整合能力。",
            "公司善用數位資源以確認有效的整合現有能力。",
            "公司善用數位資源以整合相關策略，例如資源優勢策略、市場開拓策略或創業策略。"
        ]
    },
    c1: { 
        name: "技術能力", 
        dimension: "C", 
        description: "指在資訊技術領域的專業知識和技能。",
        examples: [
            "公司IT人員擅長多元與結構化的程式方法或工具。",
            "公司IT人員擅長分散式處理或運算。",
            "公司IT人員擅長網路管理。",
            "公司IT人員擅長網頁應用程式。",
            "公司IT人員擅長資料倉儲與資料探勘。"
        ]
    },
    c2: { 
        name: "行為能力", 
        dimension: "C", 
        description: "指在工作環境中展現的行為和軟技能。",
        examples: [
            "公司IT人員自動自發。",
            "公司IT人員具備專案規劃、組織與領導能力。",
            "公司IT人員具有協同合作能力。",
            "公司IT人員可以勝任處理業務問題的跨功能團隊。",
            "公司IT人員接受跨領域支援的相關訓練。"
        ]
    },
    c3: { 
        name: "業務能力", 
        dimension: "C", 
        description: "指企業在其運營和市場中取得成功所需的核心能力。",
        examples: [
            "公司IT人員對於公司的關鍵成功因素很有概念。",
            "公司IT人員被鼓勵學習新興科技。",
            "公司IT人員積極跟進新興科技。",
            "公司資訊策略有效配合企業策略。",
            "公司IT人員瞭解公司政策與計畫。",
            "公司IT人員理解業務問題並能提出適當的技術解決方案。",
            "公司IT人員瞭解業務運作方式。"
        ]
    },
    d1: { 
        name: "效率數位轉型", 
        dimension: "D", 
        description: "指企業能夠更迅速地響應市場變化，提升整體生產力。",
        examples: [
            "公司發展可行的數位轉型計畫。",
            "公司調整組織結構以配合數位轉型任務。",
            "公司使用數位科技優化調整重要流程。",
            "公司使用大量的內外部資料以制定明智的決策。"
        ]
    },
    d2: { 
        name: "價值數位轉型", 
        dimension: "D", 
        description: "指企業提供創新的數位解決方案，通過產品、服務和商業模式的數位化來創造新價值。",
        examples: [
            "公司使用數位科技以優化現有產品或服務。",
            "公司有能力開發與提供新的數位產品或服務。",
            "公司透過資料來認定與回應市場變遷與客戶需求。",
            "公司透過資源共享與科技串連方式與利害關係人共創價值。"
        ]
    },
    e1: { 
        name: "營運調整機動性", 
        dimension: "E", 
        description: "指企業能夠迅速調整內部流程和資源配置，以提高效率和響應速度。",
        examples: [
            "面對供應商出貨異常狀況，公司可快速採取替代方案與內部調整。",
            "面對市場需求的波動，公司可以有效彈性調整產品或服務規模。",
            "公司可以有效快速回應客戶的特殊需求，取得客戶信任。"
        ]
    },
    e2: { 
        name: "市場商機機動性", 
        dimension: "E", 
        description: "指企業識別和抓住新興技術帶來的商業機遇的能力。",
        examples: [
            "公司可以快速的制定與推動適當的決策，以回應市場或客戶的變動。",
            "公司看待市場相關變動與重大混亂為可以快速掌握的商機。",
            "公司持續尋求再創或再造組織，以提供客戶更好的服務。"
        ]
    }
};

// 全局變量
let currentStep = 1;
let bwmAnswers = {};
let bestFactor = null;
let worstFactor = null;
let currentBWMQuestion = 0;
let bwmQuestions = [];

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeBWMQuestionnaire();
    loadSavedAnswers();
});

// 初始化BWM問卷
function initializeBWMQuestionnaire() {
    updateStepIndicator();
    updateProgress();
    generateBWMQuestions();
    
    // 確保提交按鈕初始狀態為隱藏
    const submitBtn = document.getElementById('bwm-submit-btn');
    if (submitBtn) {
        submitBtn.style.display = 'none';
    }
}

// 生成BWM問題
function generateBWMQuestions() {
    bwmQuestions = [];
    
    // 添加最佳因素選擇問題
    bwmQuestions.push({
        type: 'best_selection',
        title: '請選擇您認為最重要的因素（最佳因素）',
        description: '請從以下10個因素中選擇一個您認為對數位轉型最重要的因素。'
    });
    
    // 添加最劣因素選擇問題
    bwmQuestions.push({
        type: 'worst_selection',
        title: '請選擇您認為最不重要的因素（最劣因素）',
        description: '請從以下10個因素中選擇一個您認為對數位轉型最不重要的因素。'
    });
    
    // 添加批量最佳因素比較問題
    bwmQuestions.push({
        type: 'batch_best_comparison',
        title: '最佳因素與其他因素比較',
        description: '請評估最佳因素與其他因素相比的重要性程度。'
    });
    
    // 添加批量最劣因素比較問題
    bwmQuestions.push({
        type: 'batch_worst_comparison',
        title: '其他因素與最劣因素比較',
        description: '請評估其他因素與最劣因素相比的重要性程度。'
    });
} 

// 步驟導航
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 3) {
            document.getElementById(`step${currentStep}`).classList.remove('active');
            currentStep++;
            document.getElementById(`step${currentStep}`).classList.add('active');
            
            if (currentStep === 3) {
                generateBWMSelections();
                showCurrentBWMQuestion();
            }
            
            updateStepIndicator();
            updateProgress();
            autoSaveAnswers();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        if (currentStep === 3) {
            generateBWMSelections();
            showCurrentBWMQuestion();
        }
        
        updateStepIndicator();
        updateProgress();
        autoSaveAnswers();
    }
}

// 驗證當前步驟
function validateCurrentStep() {
    if (currentStep === 1) {
        return validateStep1();
    }
    return true;
}

// 驗證步驟1（基本資料）
function validateStep1() {
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector('input[name="age"]:checked');
    const education = document.querySelector('input[name="education"]:checked');
    const electronicsIndustry = document.querySelector('input[name="electronics_industry"]:checked');
    const experience = document.querySelector('input[name="experience"]:checked');
    
    if (!gender) { return false; }
    if (!age) { return false; }
    if (!education) { return false; }
    if (!electronicsIndustry) { return false; }
    if (!experience) { return false; }
    
    return true;
}

// 更新步驟指示器
function updateStepIndicator() {
    const dots = document.querySelectorAll('.step-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 === currentStep) {
            dot.classList.add('active');
        } else if (index + 1 < currentStep) {
            dot.classList.add('completed');
        }
    });
}

// 更新進度條
function updateProgress() {
    const progress = (currentStep / 3) * 100;
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '%';
    }
}

// 生成BWM選擇界面
function generateBWMSelections() {
    const container = document.getElementById('bwm-question-content');
    if (!container) return;
    
    // 隱藏提交按鈕
    const submitBtn = document.getElementById('bwm-submit-btn');
    if (submitBtn) {
        submitBtn.style.display = 'none';
    }
    
    const navigationHtml = `
        <div class="question-navigation mb-4">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h6 class="mb-0"><i class="fas fa-list"></i> 題目導航</h6>
                </div>
                <div class="card-body">
                    <div class="question-list d-flex flex-wrap gap-2">
                        ${bwmQuestions.map((question, index) => `
                            <button type="button" class="btn btn-sm btn-outline-secondary" 
                                    onclick="goToBWMQuestion(${index})" 
                                    id="nav-btn-${index}"
                                    title="題目 ${index + 1}">
                                ${index + 1}
                            </button>
                        `).join('')}
                    </div>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <div class="progress flex-grow-1 me-3" style="height: 8px;">
                            <div class="progress-bar" id="bwm-progress-bar" role="progressbar" style="width: 0%"></div>
                        </div>
                        <span class="text-muted small" id="bwm-progress-text">0 / ${bwmQuestions.length}</span>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-primary" onclick="prevBWMQuestion()" id="bwm-prev-btn">
                            <i class="fas fa-chevron-left"></i> 上一題
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 評分標準詳細表格
    const ratingScaleHtml = `
        <div class="rating-scale-table mb-4">
            <div class="card">
                <div class="card-header bg-info text-white">
                    <h6 class="mb-0"><i class="fas fa-table"></i> 評分標準詳細說明</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm">
                            <thead class="table-light">
                                <tr>
                                    <th class="text-center" style="width: 10%">分數</th>
                                    <th style="width: 20%">定義</th>
                                    <th style="width: 70%">說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center fw-bold">1</td>
                                    <td>同等重要</td>
                                    <td>兩比較方案具同等重要性</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">2</td>
                                    <td>尺度1與尺度3之間</td>
                                    <td>介於同等重要與稍微重要之間</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">3</td>
                                    <td>稍微重要</td>
                                    <td>經驗與判斷稍微傾向偏好某一方案</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">4</td>
                                    <td>尺度3與尺度5之間</td>
                                    <td>介於稍微重要與非常重要之間</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">5</td>
                                    <td>非常重要</td>
                                    <td>經驗與判斷非常傾向偏好某一方案</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">6</td>
                                    <td>尺度5與尺度7之間</td>
                                    <td>介於非常重要與極度重要之間</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">7</td>
                                    <td>極度重要</td>
                                    <td>實際顯示強烈傾向偏好某一方案</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">8</td>
                                    <td>尺度7與尺度9之間</td>
                                    <td>介於極度重要與絕對重要之間</td>
                                </tr>
                                <tr>
                                    <td class="text-center fw-bold">9</td>
                                    <td>絕對重要</td>
                                    <td>充分證據絕對偏好某一方案</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = navigationHtml + ratingScaleHtml + '<div id="current-question-content" class="question-transition"></div>';
    updateBWMQuestionNavigation();
    updateBWMProgress();
}

// 顯示當前BWM問題
function showCurrentBWMQuestion() {
    const container = document.getElementById('current-question-content');
    if (!container) return;
    
    if (currentBWMQuestion >= bwmQuestions.length) {
        container.innerHTML = `
            <div class="alert alert-success">
                <h4><i class="fas fa-check-circle"></i> 所有問題已完成！</h4>
                <p class="mb-3">您已完成所有BWM評估題目，現在可以提交問卷。</p>
            </div>
        `;
        // 檢查是否所有答案都已完成，如果是則顯示提交按鈕
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
        return;
    }
    
    const question = bwmQuestions[currentBWMQuestion];
    
    if (question.type === 'best_selection') {
        generateBestFactorSelection(container, question);
    } else if (question.type === 'worst_selection') {
        generateWorstFactorSelection(container, question);
    } else if (question.type === 'batch_best_comparison') {
        generateBatchBestFactorComparison(container, question);
    } else if (question.type === 'batch_worst_comparison') {
        generateBatchWorstFactorComparison(container, question);
    }
    
    // 更新進度
    updateBWMProgress();
    
    // 檢查是否需要自動跳轉到下一步
    checkAutoNavigation();
    
    // 檢查是否所有問題都已完成，如果是則顯示提交按鈕
    // 這個檢查需要在每次顯示問題時都進行，確保按鈕能正確顯示
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 100);
} 

// 生成最佳因素選擇
function generateBestFactorSelection(container, question) {
    let html = `
        <div class="alert alert-info">
            <h5><i class="fas fa-star"></i> ${question.title}</h5>
            <p>${question.description}</p>
        </div>
        <div class="row">
    `;
    
    // 按構面分組顯示因素
    const dimensionGroups = {};
    Object.entries(factors).forEach(([key, factor]) => {
        if (!dimensionGroups[factor.dimension]) {
            dimensionGroups[factor.dimension] = [];
        }
        dimensionGroups[factor.dimension].push({ key, factor });
    });
    
    Object.entries(dimensionGroups).forEach(([dimension, factorList]) => {
        html += `
            <div class="col-12 mb-3">
                <h6 class="text-primary border-bottom pb-2 mb-3">
                    <strong>${dimension}、${dimensions[dimension].name}</strong>
                </h6>
                <div class="row">
        `;
        
        factorList.forEach(({ key, factor }) => {
            const isSelected = bestFactor === key;
            
            html += `
                <div class="col-md-6 mb-3">
                    <div class="factor-option card ${isSelected ? 'selected border-primary' : ''}" 
                         onclick="selectBestFactor('${key}')" style="cursor: pointer;">
                        <div class="card-body">
                            <h6><strong class="text-primary">${key}.</strong> ${factor.name}</h6>
                            <p class="mb-2"><small class="text-muted">${factor.description}</small></p>
                            ${factor.examples ? `
                                <div class="mt-2">
                                    <small class="text-primary"><strong>舉例：</strong></small>
                                    <ul class="list-unstyled mt-1">
                                        ${factor.examples.map(example => 
                                            `<li><small class="text-muted">• ${example}</small></li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// 生成最劣因素選擇
function generateWorstFactorSelection(container, question) {
    let html = `
        <div class="alert alert-warning">
            <h5><i class="fas fa-exclamation-triangle"></i> ${question.title}</h5>
            <p>${question.description}</p>
        </div>
        <div class="row">
    `;
    
    // 按構面分組顯示因素
    const dimensionGroups = {};
    Object.entries(factors).forEach(([key, factor]) => {
        if (!dimensionGroups[factor.dimension]) {
            dimensionGroups[factor.dimension] = [];
        }
        dimensionGroups[factor.dimension].push({ key, factor });
    });
    
    Object.entries(dimensionGroups).forEach(([dimension, factorList]) => {
        html += `
            <div class="col-12 mb-3">
                <h6 class="text-primary border-bottom pb-2 mb-3">
                    <strong>${dimension}、${dimensions[dimension].name}</strong>
                </h6>
                <div class="row">
        `;
        
        factorList.forEach(({ key, factor }) => {
            const isSelected = worstFactor === key;
            
            html += `
                <div class="col-md-6 mb-3">
                    <div class="factor-option card ${isSelected ? 'selected border-danger' : ''}" 
                         onclick="selectWorstFactor('${key}')" style="cursor: pointer;">
                        <div class="card-body">
                            <h6><strong class="text-danger">${key}.</strong> ${factor.name}</h6>
                            <p class="mb-2"><small class="text-muted">${factor.description}</small></p>
                            ${factor.examples ? `
                                <div class="mt-2">
                                    <small class="text-primary"><strong>舉例：</strong></small>
                                    <ul class="list-unstyled mt-1">
                                        ${factor.examples.map(example => 
                                            `<li><small class="text-muted">• ${example}</small></li>`
                                        ).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// 生成批量最佳因素比較
function generateBatchBestFactorComparison(container, question) {
    const savedBestFactor = bwmAnswers.best_factor;
    if (!savedBestFactor) {
        container.innerHTML = '<div class="alert alert-warning">請先選擇最佳因素</div>';
        return;
    }
    
    const bestFactorInfo = factors[savedBestFactor];
    const otherFactors = Object.keys(factors).filter(key => key !== savedBestFactor);
    
    let html = `
        <div class="alert alert-info">
            <h5><i class="fas fa-star"></i> ${question.title}</h5>
            <p>${question.description}</p>
        </div>
        
        <!-- 最佳因素詳細資訊 -->
        <div class="best-factor-info mb-4">
            <div class="card border-primary">
                <div class="card-header bg-primary text-white">
                    <h6 class="mb-0"><i class="fas fa-star"></i> 最佳因素：${savedBestFactor}. ${bestFactorInfo.name}</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="text-primary">因素說明：</h6>
                            <p class="mb-2">${bestFactorInfo.description}</p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-primary">舉例說明：</h6>
                            <ul class="mb-0">
                                ${bestFactorInfo.examples.map(example => `<li>${example}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="comparison-instruction">
            <h6><i class="fas fa-info-circle"></i> 比較說明</h6>
            <ul>
                <li><strong>比較方式：</strong>請評估最佳因素與其他因素相比的重要性程度</li>
            </ul>
        </div>
        
        <!-- 移動端評分標準 -->
        <div class="mobile-rating-scale">
            <h6><i class="fas fa-info-circle"></i> 評分標準</h6>
            <div class="rating-item">
                <div class="rating-number">1</div>
                <div class="rating-text">同等重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">3</div>
                <div class="rating-text">稍微重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">5</div>
                <div class="rating-text">明顯重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">7</div>
                <div class="rating-text">非常重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">9</div>
                <div class="rating-text">極端重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">2,4,6,8</div>
                <div class="rating-text">中間值</div>
            </div>
        </div>
        
        <!-- 移動端導航提示 -->
        <div class="mobile-navigation-hint">
            <i class="fas fa-mobile-alt"></i>
            點擊下方按鈕進行評分，完成後將自動進入下一題
        </div>
        
        <div class="batch-progress">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0">完成進度</h6>
                <span class="badge bg-primary" id="batch-best-progress">0 / ${otherFactors.length}</span>
            </div>
            <div class="progress">
                <div class="progress-bar bg-success" id="batch-best-progress-bar" role="progressbar" style="width: 0%"></div>
            </div>
        </div>
        
        <!-- 桌面版表格 -->
        <div class="table-responsive">
            <table class="batch-comparison-table">
                <thead>
                    <tr>
                        <th class="factor-header">比較因素</th>
                        <th colspan="9" class="text-center">重要性評分</th>
                        <th class="factor-header">因素說明</th>
                        <th class="factor-header">舉例說明</th>
                    </tr>
                    <tr>
                        <th class="factor-header">最佳因素 vs 其他因素</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th class="text-center">說明</th>
                        <th class="text-center">舉例</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    otherFactors.forEach(factorKey => {
        const factorInfo = factors[factorKey];
        // 確保只獲取最佳因素比較的答案，避免與最劣因素比較混淆
        const answerKey = `best_${savedBestFactor}_${factorKey}`;
        const savedValue = bwmAnswers[answerKey];
        
        html += `
            <tr>
                <td class="factor-header">
                    <strong>${savedBestFactor}. ${bestFactorInfo.name}</strong><br>
                    <small class="text-muted">vs ${factorKey}. ${factorInfo.name}</small>
                </td>
        `;
        
        for (let i = 1; i <= 9; i++) {
            const isSelected = savedValue == i;
            html += `
                <td class="rating-cell">
                    <button type="button" class="btn btn-sm rating-btn ${isSelected ? 'btn-primary' : 'btn-outline-secondary'}" 
                            onclick="setBatchBWMScore('best_${savedBestFactor}_${factorKey}', ${i}, this)">
                        ${i}
                    </button>
                </td>
            `;
        }
        
        // 新增因素說明和舉例列
        html += `
                <td class="factor-description-cell">
                    <small>${factorInfo.description}</small>
                </td>
                <td class="factor-examples-cell">
                    <ul class="list-unstyled mb-0">
                        ${factorInfo.examples.map(example => `<li><small>• ${example}</small></li>`).join('')}
                    </ul>
                </td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        
        <!-- 移動版卡片式布局 -->
        <div class="mobile-comparison-cards">
    `;
    
    otherFactors.forEach(factorKey => {
        const factorInfo = factors[factorKey];
        // 確保只獲取最佳因素比較的答案，避免與最劣因素比較混淆
        const answerKey = `best_${savedBestFactor}_${factorKey}`;
        const savedValue = bwmAnswers[answerKey];
        
        html += `
            <div class="comparison-card">
                <div class="comparison-card-header">
                    <h6><strong>${savedBestFactor}. ${bestFactorInfo.name}</strong> vs <strong>${factorKey}. ${factorInfo.name}</strong></h6>
                </div>
                <div class="comparison-card-body">
                    <div class="comparison-factor-info">
                        <h6>因素說明：</h6>
                        <p>${factorInfo.description}</p>
                        <h6>舉例說明：</h6>
                        <ul>
                            ${factorInfo.examples.map(example => `<li>${example}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mobile-rating-buttons">
        `;
        
        for (let i = 1; i <= 9; i++) {
            const isSelected = savedValue == i;
            html += `
                        <button type="button" class="btn mobile-rating-btn ${isSelected ? 'btn-primary' : 'btn-outline-secondary'}" 
                                onclick="setBatchBWMScore('best_${savedBestFactor}_${factorKey}', ${i}, this)">
                            ${i}
                        </button>
            `;
        }
        
        html += `
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
    `;
    
    container.innerHTML = html;
    updateBatchBestProgress();
}

// 生成批量最劣因素比較
function generateBatchWorstFactorComparison(container, question) {
    const savedWorstFactor = bwmAnswers.worst_factor;
    if (!savedWorstFactor) {
        container.innerHTML = '<div class="alert alert-warning">請先選擇最劣因素</div>';
        return;
    }
    
    const worstFactorInfo = factors[savedWorstFactor];
    const otherFactors = Object.keys(factors).filter(key => key !== savedWorstFactor);
    
    let html = `
        <div class="alert alert-warning">
            <h5><i class="fas fa-exclamation-triangle"></i> ${question.title}</h5>
            <p>${question.description}</p>
        </div>
        
        <!-- 最劣因素詳細資訊 -->
        <div class="worst-factor-info mb-4">
            <div class="card border-warning">
                <div class="card-header bg-warning text-dark">
                    <h6 class="mb-0"><i class="fas fa-exclamation-triangle"></i> 最劣因素：${savedWorstFactor}. ${worstFactorInfo.name}</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="text-warning">因素說明：</h6>
                            <p class="mb-2">${worstFactorInfo.description}</p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-warning">舉例說明：</h6>
                            <ul class="mb-0">
                                ${worstFactorInfo.examples.map(example => `<li>${example}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="comparison-instruction">
            <h6><i class="fas fa-info-circle"></i> 比較說明</h6>
            <ul>
                <li><strong>比較方式：</strong>請評估其他因素與最劣因素相比的重要性程度</li>
            </ul>
        </div>
        
        <!-- 移動端評分標準 -->
        <div class="mobile-rating-scale">
            <h6><i class="fas fa-info-circle"></i> 評分標準</h6>
            <div class="rating-item">
                <div class="rating-number">1</div>
                <div class="rating-text">同等重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">3</div>
                <div class="rating-text">稍微重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">5</div>
                <div class="rating-text">明顯重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">7</div>
                <div class="rating-text">非常重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">9</div>
                <div class="rating-text">極端重要</div>
            </div>
            <div class="rating-item">
                <div class="rating-number">2,4,6,8</div>
                <div class="rating-text">中間值</div>
            </div>
        </div>
        
        <!-- 移動端導航提示 -->
        <div class="mobile-navigation-hint">
            <i class="fas fa-mobile-alt"></i>
            點擊下方按鈕進行評分，完成後將自動進入下一題
        </div>
        
        <div class="batch-progress">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0">完成進度</h6>
                <span class="badge bg-primary" id="batch-worst-progress">0 / ${otherFactors.length}</span>
            </div>
            <div class="progress">
                <div class="progress-bar bg-success" id="batch-worst-progress-bar" role="progressbar" style="width: 0%"></div>
            </div>
        </div>
        
        <!-- 桌面版表格 -->
        <div class="table-responsive">
            <table class="batch-comparison-table">
                <thead>
                    <tr>
                        <th class="factor-header">比較因素</th>
                        <th colspan="9" class="text-center">重要性評分</th>
                        <th class="factor-header">因素說明</th>
                        <th class="factor-header">舉例說明</th>
                    </tr>
                    <tr>
                        <th class="factor-header">其他因素 vs 最劣因素</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th class="text-center">說明</th>
                        <th class="text-center">舉例</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    otherFactors.forEach(factorKey => {
        const factorInfo = factors[factorKey];
        // 確保只獲取最劣因素比較的答案，避免與最佳因素比較混淆
        const answerKey = `worst_${factorKey}_${savedWorstFactor}`;
        const savedValue = bwmAnswers[answerKey];
        
        html += `
            <tr>
                <td class="factor-header">
                    <strong>${factorKey}. ${factorInfo.name}</strong><br>
                    <small class="text-muted">vs ${savedWorstFactor}. ${worstFactorInfo.name}</small>
                </td>
        `;
        
        for (let i = 1; i <= 9; i++) {
            const isSelected = savedValue == i;
            html += `
                <td class="rating-cell">
                    <button type="button" class="btn btn-sm rating-btn ${isSelected ? 'btn-primary' : 'btn-outline-secondary'}" 
                            onclick="setBatchBWMScore('worst_${factorKey}_${savedWorstFactor}', ${i}, this)">
                        ${i}
                    </button>
                </td>
            `;
        }
        
        // 新增因素說明和舉例列
        html += `
                <td class="factor-description-cell">
                    <small>${factorInfo.description}</small>
                </td>
                <td class="factor-examples-cell">
                    <ul class="list-unstyled mb-0">
                        ${factorInfo.examples.map(example => `<li><small>• ${example}</small></li>`).join('')}
                    </ul>
                </td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        
        <!-- 移動版卡片式布局 -->
        <div class="mobile-comparison-cards">
    `;
    
    otherFactors.forEach(factorKey => {
        const factorInfo = factors[factorKey];
        // 確保只獲取最劣因素比較的答案，避免與最佳因素比較混淆
        const answerKey = `worst_${factorKey}_${savedWorstFactor}`;
        const savedValue = bwmAnswers[answerKey];
        
        html += `
            <div class="comparison-card">
                <div class="comparison-card-header">
                    <h6><strong>${factorKey}. ${factorInfo.name}</strong> vs <strong>${savedWorstFactor}. ${worstFactorInfo.name}</strong></h6>
                </div>
                <div class="comparison-card-body">
                    <div class="comparison-factor-info">
                        <h6>因素說明：</h6>
                        <p>${factorInfo.description}</p>
                        <h6>舉例說明：</h6>
                        <ul>
                            ${factorInfo.examples.map(example => `<li>${example}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mobile-rating-buttons">
        `;
        
        for (let i = 1; i <= 9; i++) {
            const isSelected = savedValue == i;
            html += `
                        <button type="button" class="btn mobile-rating-btn ${isSelected ? 'btn-primary' : 'btn-outline-secondary'}" 
                                onclick="setBatchBWMScore('worst_${factorKey}_${savedWorstFactor}', ${i}, this)">
                            ${i}
                        </button>
            `;
        }
        
        html += `
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
    `;
    
    container.innerHTML = html;
    updateBatchWorstProgress();
} 

// 選擇最佳因素
function selectBestFactor(factorKey) {
    bestFactor = factorKey;
    bwmAnswers.best_factor = factorKey;
    
    // 清除其他選項的選中狀態
    document.querySelectorAll('.factor-option').forEach(option => {
        option.classList.remove('selected', 'border-primary');
        option.style.borderColor = '#dee2e6';
        option.style.backgroundColor = '#fff';
    });
    
    // 選中當前選項
    const selectedOption = event.target.closest('.factor-option');
    if (selectedOption) {
        selectedOption.classList.add('selected', 'border-primary');
        selectedOption.style.borderColor = '#007bff';
        selectedOption.style.backgroundColor = '#e3f2fd';
    }
    
    autoSaveAnswers();
    updateBWMQuestionNavigation();
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
    
    setTimeout(() => {
        nextBWMQuestion();
    }, 800);
}

// 選擇最劣因素
function selectWorstFactor(factorKey) {
    worstFactor = factorKey;
    bwmAnswers.worst_factor = factorKey;
    
    // 清除其他選項的選中狀態
    document.querySelectorAll('.factor-option').forEach(option => {
        option.classList.remove('selected', 'border-danger');
        option.style.borderColor = '#dee2e6';
        option.style.backgroundColor = '#fff';
    });
    
    // 選中當前選項
    const selectedOption = event.target.closest('.factor-option');
    if (selectedOption) {
        selectedOption.classList.add('selected', 'border-danger');
        selectedOption.style.borderColor = '#dc3545';
        selectedOption.style.backgroundColor = '#f8d7da';
    }
    
    autoSaveAnswers();
    updateBWMQuestionNavigation();
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
    
    setTimeout(() => {
        nextBWMQuestion();
    }, 800);
}

// 設置批量BWM評分
function setBatchBWMScore(key, score, button) {
    bwmAnswers[key] = score;
    
    // 更新桌面版表格按鈕狀態
    const row = button.closest('tr');
    if (row) {
        const buttons = row.querySelectorAll('.rating-btn');
        buttons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-secondary');
        });
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-primary');
    }
    
    // 更新移動版卡片按鈕狀態
    const card = button.closest('.comparison-card');
    if (card) {
        const buttons = card.querySelectorAll('.mobile-rating-btn');
        buttons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-secondary');
        });
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-primary');
    }
    
    // 同步更新對應的桌面版/移動版按鈕
    // 使用更精確的選擇器來避免匹配到其他按鈕
    const allButtons = document.querySelectorAll(`[onclick*="setBatchBWMScore('${key}', ${score}"]`);
    allButtons.forEach(btn => {
        // 額外檢查確保這是正確的按鈕
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`setBatchBWMScore('${key}', ${score}`)) {
            btn.classList.remove('btn-outline-secondary');
            btn.classList.add('btn-primary');
        }
    });
    
    autoSaveAnswers();
    updateBWMQuestionNavigation();
    
    // 更新批量比較進度
    if (key.startsWith('best_')) {
        updateBatchBestProgress();
    } else if (key.startsWith('worst_')) {
        updateBatchWorstProgress();
    }
    
    // 檢查是否需要自動跳轉
    setTimeout(() => checkAutoNavigation(), 100);
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
}

// 檢查自動跳轉
function checkAutoNavigation() {
    const question = bwmQuestions[currentBWMQuestion];
    
    // 只有在用戶沒有手動導航到該問題時才檢查自動跳轉
    if (question.type === 'batch_best_comparison' && !question.manuallyNavigated) {
        // 檢查最佳因素比較是否完成
        const bestFactor = bwmAnswers.best_factor;
        if (bestFactor) {
            const otherFactors = Object.keys(factors).filter(key => key !== bestFactor);
            const isComplete = otherFactors.every(factorKey => {
                const answerKey = `best_${bestFactor}_${factorKey}`;
                return bwmAnswers.hasOwnProperty(answerKey);
            });
            
            if (isComplete) {
                // 自動跳轉到下一題
                setTimeout(() => {
                    nextBWMQuestion();
                }, 1000);
            }
        }
    }
}

// 更新批量最佳因素比較進度
function updateBatchBestProgress() {
    const savedBestFactor = bwmAnswers.best_factor;
    if (!savedBestFactor) return;
    
    const otherFactors = Object.keys(factors).filter(key => key !== savedBestFactor);
    let completedCount = 0;
    
    otherFactors.forEach(factorKey => {
        const answerKey = `best_${savedBestFactor}_${factorKey}`;
        if (bwmAnswers[answerKey]) {
            completedCount++;
        }
    });
    
    const progressText = document.getElementById('batch-best-progress');
    const progressBar = document.getElementById('batch-best-progress-bar');
    
    if (progressText && progressBar) {
        progressText.textContent = `${completedCount} / ${otherFactors.length}`;
        const progress = (completedCount / otherFactors.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// 更新批量最劣因素比較進度
function updateBatchWorstProgress() {
    const savedWorstFactor = bwmAnswers.worst_factor;
    if (!savedWorstFactor) return;
    
    const otherFactors = Object.keys(factors).filter(key => key !== savedWorstFactor);
    let completedCount = 0;
    
    otherFactors.forEach(factorKey => {
        const answerKey = `worst_${factorKey}_${savedWorstFactor}`;
        if (bwmAnswers[answerKey]) {
            completedCount++;
        }
    });
    
    const progressText = document.getElementById('batch-worst-progress');
    const progressBar = document.getElementById('batch-worst-progress-bar');
    
    if (progressText && progressBar) {
        progressText.textContent = `${completedCount} / ${otherFactors.length}`;
        const progress = (completedCount / otherFactors.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// 下一題BWM問題
function nextBWMQuestion() {
    if (currentBWMQuestion < bwmQuestions.length - 1) {
        currentBWMQuestion++;
        showCurrentBWMQuestion();
        updateBWMQuestionNavigation();
    } else {
        currentBWMQuestion++;
        showCurrentBWMQuestion();
        updateBWMQuestionNavigation();
    }
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
}

// 跳轉到指定BWM問題
function goToBWMQuestion(questionIndex) {
    currentBWMQuestion = questionIndex;
    
    // 如果用戶手動導航到問題，標記為手動導航
    const question = bwmQuestions[questionIndex];
    if (question && question.type === 'batch_best_comparison') {
        question.manuallyNavigated = true;
    }
    
    showCurrentBWMQuestion();
    updateBWMQuestionNavigation();
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
}

// 上一題BWM問題
function prevBWMQuestion() {
    if (currentBWMQuestion > 0) {
        currentBWMQuestion--;
        
        // 如果用戶手動導航到問題，標記為手動導航
        const question = bwmQuestions[currentBWMQuestion];
        if (question && question.type === 'batch_best_comparison') {
            question.manuallyNavigated = true;
        }
        
        showCurrentBWMQuestion();
        updateBWMQuestionNavigation();
    }
    
    // 檢查是否需要顯示提交按鈕
    setTimeout(() => {
        const submitBtn = document.getElementById('bwm-submit-btn');
        if (submitBtn && validateBWMQuestionnaire()) {
            submitBtn.style.display = 'inline-block';
        } else if (submitBtn) {
            submitBtn.style.display = 'none';
        }
    }, 200);
}

// 更新BWM題目導航狀態
function updateBWMQuestionNavigation() {
    bwmQuestions.forEach((question, index) => {
        const navBtn = document.getElementById(`nav-btn-${index}`);
        if (navBtn) {
            navBtn.classList.remove('btn-success', 'btn-primary', 'btn-outline-secondary');
            
            if (index === currentBWMQuestion) {
                navBtn.classList.add('btn-primary');
            } else if (isBWMQuestionAnswered(index)) {
                navBtn.classList.add('btn-success');
            } else {
                navBtn.classList.add('btn-outline-secondary');
            }
        }
    });
    
    // 更新上一題按鈕狀態
    const prevBtn = document.getElementById('bwm-prev-btn');
    
    if (prevBtn) {
        if (currentBWMQuestion === 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.disabled = false;
            prevBtn.classList.remove('disabled');
        }
    }
}

// 更新BWM進度
function updateBWMProgress() {
    const progressText = document.getElementById('bwm-progress-text');
    const progressBar = document.getElementById('bwm-progress-bar');
    
    if (progressText && progressBar) {
        const totalQuestions = bwmQuestions.length;
        const currentQuestion = currentBWMQuestion + 1;
        
        progressText.textContent = `${currentQuestion} / ${totalQuestions}`;
        const progress = (currentQuestion / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// 檢查BWM問題是否已回答
function isBWMQuestionAnswered(questionIndex) {
    const question = bwmQuestions[questionIndex];
    
    if (question.type === 'best_selection') {
        return bwmAnswers.best_factor;
    } else if (question.type === 'worst_selection') {
        return bwmAnswers.worst_factor;
    } else if (question.type === 'batch_best_comparison') {
        const bestFactor = bwmAnswers.best_factor;
        if (!bestFactor) return false;
        const otherFactors = Object.keys(factors).filter(key => key !== bestFactor);
        return otherFactors.every(factorKey => {
            const answerKey = `best_${bestFactor}_${factorKey}`;
            return bwmAnswers.hasOwnProperty(answerKey);
        });
    } else if (question.type === 'batch_worst_comparison') {
        const worstFactor = bwmAnswers.worst_factor;
        if (!worstFactor) return false;
        const otherFactors = Object.keys(factors).filter(key => key !== worstFactor);
        return otherFactors.every(factorKey => {
            const answerKey = `worst_${factorKey}_${worstFactor}`;
            return bwmAnswers.hasOwnProperty(answerKey);
        });
    }
    
    return false;
}

// 自動保存答案
function autoSaveAnswers() {
    const basicData = {
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        age: document.querySelector('input[name="age"]:checked')?.value,
        education: document.querySelector('input[name="education"]:checked')?.value,
        electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
        experience: document.querySelector('input[name="experience"]:checked')?.value
    };
    
    const surveyData = {
        basic: basicData,
        bwm: bwmAnswers,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('bwm_survey_batch_data', JSON.stringify(surveyData));
}

// 載入保存的答案
function loadSavedAnswers() {
    const savedData = localStorage.getItem('bwm_survey_batch_data');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            if (data.basic) {
                if (data.basic.gender) {
                    document.querySelector(`input[name="gender"][value="${data.basic.gender}"]`).checked = true;
                }
                if (data.basic.age) {
                    document.querySelector(`input[name="age"][value="${data.basic.age}"]`).checked = true;
                }
                if (data.basic.education) {
                    document.querySelector(`input[name="education"][value="${data.basic.education}"]`).checked = true;
                }
                if (data.basic.electronics_industry) {
                    document.querySelector(`input[name="electronics_industry"][value="${data.basic.electronics_industry}"]`).checked = true;
                }
                if (data.basic.experience) {
                    document.querySelector(`input[name="experience"][value="${data.basic.experience}"]`).checked = true;
                }
            }
            
            if (data.bwm) {
                bwmAnswers = data.bwm;
                bestFactor = data.bwm.best_factor;
                worstFactor = data.bwm.worst_factor;
                
                // 檢查是否所有問題都已完成
                if (bestFactor && worstFactor) {
                    const bestFactorKey = bestFactor;
                    const worstFactorKey = worstFactor;
                    let allCompleted = true;
                    
                    // 檢查最佳因素比較是否完整
                    Object.keys(factors).forEach(factorKey => {
                        if (factorKey !== bestFactorKey) {
                            const answerKey = `best_${bestFactorKey}_${factorKey}`;
                            if (!bwmAnswers[answerKey]) {
                                allCompleted = false;
                            }
                        }
                    });
                    
                    // 檢查最劣因素比較是否完整
                    Object.keys(factors).forEach(factorKey => {
                        if (factorKey !== worstFactorKey) {
                            const answerKey = `worst_${factorKey}_${worstFactorKey}`;
                            if (!bwmAnswers[answerKey]) {
                                allCompleted = false;
                            }
                        }
                    });
                    
                    // 如果所有問題都已完成，顯示提交按鈕
                    if (allCompleted) {
                        const submitBtn = document.getElementById('bwm-submit-btn');
                        if (submitBtn) {
                            submitBtn.style.display = 'inline-block';
                        }
                    }
                }
            }
        } catch (error) {
            console.error('載入保存的答案時發生錯誤:', error);
        }
    }
}

// 提交BWM問卷
function submitBWMQuestionnaire() {
    if (validateBWMQuestionnaire()) {
        const basicData = {
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            age: document.querySelector('input[name="age"]:checked')?.value,
            education: document.querySelector('input[name="education"]:checked')?.value,
            electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
            experience: document.querySelector('input[name="experience"]:checked')?.value
        };
        
        // 格式化BWM數據為要求的格式
        const bestFactor = bwmAnswers.best_factor;
        const worstFactor = bwmAnswers.worst_factor;
        
        const bestComparisons = {};
        const worstComparisons = {};
        
        // 生成最佳因素比較，包括與自身的比較（數值為1）
        Object.keys(factors).forEach(factorKey => {
            const answerKey = `best_${bestFactor}_${factorKey}`;
            if (factorKey === bestFactor) {
                bestComparisons[answerKey] = 1; // 自身比較為1
            } else {
                bestComparisons[answerKey] = bwmAnswers[answerKey];
            }
        });
        
        // 生成最劣因素比較，包括與自身的比較（數值為1）
        Object.keys(factors).forEach(factorKey => {
            const answerKey = `worst_${factorKey}_${worstFactor}`;
            if (factorKey === worstFactor) {
                worstComparisons[answerKey] = 1; // 自身比較為1
            } else {
                worstComparisons[answerKey] = bwmAnswers[answerKey];
            }
        });
        
        const formattedBWMData = {
            bestFactor: bestFactor,
            worstFactor: worstFactor,
            bestComparisons: bestComparisons,
            worstComparisons: worstComparisons
        };
        
        const surveyData = {
            basic: basicData,
            bwm: formattedBWMData,
            timestamp: new Date().toISOString()
        };
        
        // 保存到localStorage以便下載
        localStorage.setItem('bwm_survey_batch_data', JSON.stringify(surveyData));
        
        displayBWMResults(surveyData);
    }
}

// 驗證BWM問卷
function validateBWMQuestionnaire() {
    // 檢查是否有基本資料
    const basicData = {
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        age: document.querySelector('input[name="age"]:checked')?.value,
        education: document.querySelector('input[name="education"]:checked')?.value,
        electronics_industry: document.querySelector('input[name="electronics_industry"]:checked')?.value,
        experience: document.querySelector('input[name="experience"]:checked')?.value
    };
    
    // 檢查基本資料是否完整
    const requiredBasicFields = ['gender', 'age', 'education', 'electronics_industry', 'experience'];
    const missingBasicFields = requiredBasicFields.filter(field => !basicData[field]);
    
    if (missingBasicFields.length > 0) {
        showToast('驗證錯誤', '請先完成基本資料填寫', 'error');
        return false;
    }
    
    if (!bwmAnswers.best_factor) {
        return false;
    }
    
    if (!bwmAnswers.worst_factor) {
        return false;
    }
    
    const bestFactor = bwmAnswers.best_factor;
    const worstFactor = bwmAnswers.worst_factor;
    
    // 檢查最佳因素比較是否完整
    for (const factorKey of Object.keys(factors)) {
        if (factorKey !== bestFactor) {
            const answerKey = `best_${bestFactor}_${factorKey}`;
            if (!bwmAnswers[answerKey]) {
                return false;
            }
        }
    }
    
    // 檢查最劣因素比較是否完整
    for (const factorKey of Object.keys(factors)) {
        if (factorKey !== worstFactor) {
            const answerKey = `worst_${factorKey}_${worstFactor}`;
            if (!bwmAnswers[answerKey]) {
                return false;
            }
        }
    }
    
    return true;
}

// 顯示BWM結果
function displayBWMResults(data) {
    const container = document.querySelector('.container');
    
    let resultsHtml = `
        <div class="text-center mb-4">
            <h1 class="display-4 text-success">問卷提交成功！</h1>
            <p class="lead text-muted">感謝您完成BWM數位轉型影響因素研究問卷</p>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>基本資料</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">性別: ${data.basic.gender === 'male' ? '男' : data.basic.gender === 'female' ? '女' : '未填寫'}</li>
                            <li class="list-group-item">年齡: ${data.basic.age || '未填寫'}</li>
                            <li class="list-group-item">教育程度: ${data.basic.education || '未填寫'}</li>
                            <li class="list-group-item">是否為電子製造業: ${data.basic.electronics_industry === 'yes' ? '是' : data.basic.electronics_industry === 'no' ? '否' : '未填寫'}</li>
                            <li class="list-group-item">數位轉型年資: ${data.basic.experience || '未填寫'}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>BWM評估結果</h4>
                    </div>
                    <div class="card-body">
                        <p><strong>最佳因素:</strong> ${data.bwm.bestFactor}. ${factors[data.bwm.bestFactor].name} (構面：${dimensions[factors[data.bwm.bestFactor].dimension].name})</p>
                        <p><strong>最劣因素:</strong> ${data.bwm.worstFactor}. ${factors[data.bwm.worstFactor].name} (構面：${dimensions[factors[data.bwm.worstFactor].dimension].name})</p>
                        <p><strong>完成時間：</strong>${new Date(data.timestamp).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mt-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>BWM評估結果</h4>
                    </div>
                    <div class="card-body">
                        <h5>【最佳因素比較】</h5>
                        <div class="mb-4">
                            ${Object.entries(data.bwm.bestComparisons).map(([key, value]) => {
                                const factorKey = key.split('_')[2];
                                return `<div class="mb-1">${data.bwm.bestFactor}. ${factors[data.bwm.bestFactor].name} vs ${factorKey}. ${factors[factorKey].name} = ${value}</div>`;
                            }).join('')}
                        </div>
                        
                        <h5>【最劣因素比較】</h5>
                        <div>
                            ${Object.entries(data.bwm.worstComparisons).map(([key, value]) => {
                                const factorKey = key.split('_')[1];
                                return `<div class="mb-1">${factorKey}. ${factors[factorKey].name} vs ${data.bwm.worstFactor}. ${factors[data.bwm.worstFactor].name} = ${value}</div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-4">
            <button type="button" class="btn btn-primary" onclick="downloadBWMResults()">
                <i class="fas fa-download"></i> 下載結果
            </button>
            <button type="button" class="btn btn-secondary" onclick="window.location.reload()">
                <i class="fas fa-redo"></i> 重新填寫
            </button>
        </div>
    `;
    
    container.innerHTML = resultsHtml;
}

// 下載BWM結果
function downloadBWMResults() {
    try {
        const savedData = localStorage.getItem('bwm_survey_batch_data');
        if (savedData) {
            const data = JSON.parse(savedData);
            const content = formatBWMEmailContent(data);
            
            // 創建Blob對象
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            // 創建下載鏈接
            const a = document.createElement('a');
            a.href = url;
            a.download = `BWM問卷結果_批量版_${new Date().toISOString().split('T')[0]}.txt`;
            a.style.display = 'none';
            
            // 添加到DOM並觸發下載
            document.body.appendChild(a);
            a.click();
            
            // 清理
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
            
            // 顯示成功訊息
    
        } else {
            // 沒有找到問卷數據
        }
    } catch (error) {
        console.error('下載失敗:', error);
        // 下載失敗
    }
}

// 格式化BWM郵件內容
function formatBWMEmailContent(data) {
    let content = 'BWM數位轉型影響因素研究問卷結果 (批量比較版)\n';
    content += '='.repeat(60) + '\n\n';
    
    content += '【基本資料】\n';
    content += `性別：${data.basic.gender === 'male' ? '男' : data.basic.gender === 'female' ? '女' : '未填寫'}\n`;
    content += `年齡：${data.basic.age || '未填寫'}\n`;
    content += `教育程度：${data.basic.education || '未填寫'}\n`;
    content += `是否為電子製造業：${data.basic.electronics_industry === 'yes' ? '是' : data.basic.electronics_industry === 'no' ? '否' : '未填寫'}\n`;
    content += `數位轉型年資：${data.basic.experience || '未填寫'}\n\n`;
    
    content += '【BWM評估結果】\n';
    content += `最佳因素：${data.bwm.bestFactor}. ${factors[data.bwm.bestFactor].name} (構面：${dimensions[factors[data.bwm.bestFactor].dimension].name})\n`;
    content += `最劣因素：${data.bwm.worstFactor}. ${factors[data.bwm.worstFactor].name} (構面：${dimensions[factors[data.bwm.worstFactor].dimension].name})\n\n`;
    
    // 最佳因素比較
    content += '【最佳因素比較】\n';
    Object.entries(data.bwm.bestComparisons).forEach(([key, value]) => {
        const factorKey = key.split('_')[2];
        content += `${data.bwm.bestFactor}. ${factors[data.bwm.bestFactor].name} vs ${factorKey}. ${factors[factorKey].name} = ${value}\n`;
    });
    content += '\n';
    
    // 最劣因素比較
    content += '【最劣因素比較】\n';
    Object.entries(data.bwm.worstComparisons).forEach(([key, value]) => {
        const factorKey = key.split('_')[1];
        content += `${factorKey}. ${factors[factorKey].name} vs ${data.bwm.worstFactor}. ${factors[data.bwm.worstFactor].name} = ${value}\n`;
    });
    content += '\n';
    
    content += `提交時間：${new Date(data.timestamp).toLocaleString()}\n`;
    
    return content;
} 