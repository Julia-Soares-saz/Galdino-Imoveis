let currentImageIndex = 0;
let currentModalIndex = 0;
const images = [
    ['casa1foto1.jpg', 'casa1foto2.jpg', 'casa1foto3.jpg','casa1foto4.jpg','casa1foto5.jpg','casa1foto6.jpg','casa1foto7.jpg','casa1foto8.jpg','casa1foto9.jpg','casa1foto10.jpg,','casa1foto11.jpg'],  
    ['casa2foto1.jpg', 'casa2foto2.jpg', 'casa2foto3.jpg', 'casa2foto4.jpg','casa2foto5.jpg','casa2foto6.jpg','casa2foto7.jpg','casa2foto8.jpg','casa2foto9.jpg','casa2foto10.jpg','casa2foto11.jpg','casa2foto12.jpg'],  
    ['casa3foto1.jpg', 'casa3foto2.jpg', 'casa3foto3.jpg','casa3foto4.jpg','casa3foto5.jpg'],  
    ['casa4foto1.jpg', 'casa4foto2.jpg', 'casa4foto3.jpg', 'casa4foto4.jpg', 'casa4foto5.jpg', 'casa4foto6.jpg', 'casa4foto7.jpg', 'casa4foto8.jpg', 'casa4foto9.jpg', 'casa4foto10.jpg', 'casa4foto11.jpg'],
    ['casa5foto1.jpg', 'casa5foto2.jpg', 'casa5foto3.jpg', 'casa5foto4.jpg', 'casa5foto5.jpg', 'casa5foto6.jpg', 'casa5foto7.jpg', 'casa5foto8.jpg', 'casa5foto9.jpg', 'casa5foto10.jpg', 'casa5foto11.jpg', 'casa5foto12.jpg', 'casa5foto13.jpg', 'casa5foto14.jpg', 'casa5foto15.jpg', 'casa5foto16.jpg', 'casa5foto17.jpg'],
    ['casa6foto1.jpg', 'casa6foto2.jpg', 'casa6foto3.jpg', 'casa6foto4.jpg', 'casa6foto5.jpg', 'casa6foto6.jpg', 'casa6foto7.jpg', 'casa6foto8.jpg', 'casa6foto9.jpg', 'casa6foto10.jpg', 'casa6foto11.jpg', 'casa6foto12.jpg', 'casa6foto13.jpg', 'casa6foto14.jpg', 'casa6foto15.jpg'],
    ['casa7foto1.jpg', 'casa7foto2.jpg', 'casa7foto3.jpg', 'casa7foto4.jpg', 'casa7foto5.jpg', 'casa7foto6.jpg', 'casa7foto7.jpg', 'casa7foto8.jpg', 'casa7foto9.jpg', 'casa7foto10.jpg', 'casa7foto11.jpg', 'casa7foto12.jpg', 'casa7foto13.jpg', 'casa7foto14.jpg', 'casa7foto15.jpg', 'casa7foto16.jpg', 'casa7foto17.jpg'],
    ['casa8.jpg'],
    ['casa9.jpg'],
    ['casa10.jpg'],
    ['casa11foto1.jpg', 'casa11foto2.jpg', 'casa11foto3.jpg', 'casa11foto4.jpg', 'casa11foto5.jpg', 'casa11foto6.jpg', 'casa11foto7.jpg', 'casa11foto8.jpg', 'casa11foto9.jpg', 'casa11foto10.jpg', 'casa11foto11.jpg'],
    ['casa12foto1.jpg', 'casa12foto2.jpg', 'casa12foto3.jpg', 'casa12foto4.jpg', 'casa12foto5.jpg', 'casa12foto6.jpg', 'casa12foto7.jpg', 'casa12foto8.jpg', 'casa12foto9.jpg', 'casa12foto10.jpg', 'casa12foto11.jpg'],
    ['casa13foto1.jpg', 'casa13foto2.jpg', 'casa13foto3.jpg', 'casa13foto4.jpg', 'casa13foto5.jpg', 'casa13foto6.jpg', 'casa13foto7.jpg', 'casa13foto8.jpg'],
    ['casa14foto1.jpg', 'casa14foto2.jpg', 'casa14foto3.jpg', 'casa14foto4.jpg', 'casa14foto5.jpg', 'casa14foto6.jpg', 'casa14foto7.jpg', 'casa14foto8.jpg', 'casa14foto9.jpg', 'casa14foto10.jpg', 'casa14foto11.jpg', 'casa14foto12.jpg'],
    ['casa15foto1.jpg', 'casa15foto2.jpg', 'casa15foto3.jpg'],
    ['casa16foto1.jpg', 'casa16foto2.jpg', 'casa16foto3.jpg', 'casa16foto4.jpg', 'casa16foto5.jpg', 'casa16foto6.jpg', 'casa16foto7.jpg', 'casa16foto8.jpg', 'casa16foto9.jpg', 'casa16foto10.jpg', 'casa16foto11.jpg', 'casa16foto12.jpg', 'casa16foto13.jpg'],
    ['casa17foto1.jpg', 'casa17foto2.jpg', 'casa17foto3.jpg', 'casa17foto4.jpg', 'casa17foto5.jpg', 'casa17foto6.jpg', 'casa17foto7.jpg', 'casa17foto8.jpg', 'casa17foto9.jpg', 'casa17foto10.jpg', 'casa17foto11.jpg'],
    ['casa18foto1.jpg', 'casa18foto2.jpg', 'casa18foto3.jpg', 'casa18foto4.jpg', 'casa18foto5.jpg', 'casa18foto6.jpg', 'casa18foto7.jpg', 'casa18foto8.jpg', 'casa18foto9.jpg', 'casa18foto10.jpg'],
    ['casa19foto1.jpg', 'casa19foto2.jpg', 'casa19foto3.jpg', 'casa19foto4.jpg', 'casa19foto5.jpg', 'casa19foto6.jpg', 'casa19foto7.jpg', 'casa19foto8.jpg', 'casa19foto9.jpg', 'casa19foto10.jpg', 'casa19foto11.jpg'],
    ['casa20foto1.jpg', 'casa20foto2.jpg', 'casa20foto3.jpg', 'casa20foto4.jpg', 'casa20foto5.jpg', 'casa20foto6.jpg', 'casa20foto7.jpg', 'casa20foto8.jpg', 'casa20foto9.jpg', 'casa20foto10.jpg', 'casa20foto11.jpg', 'casa20foto12.jpg'],
    ['casa21foto1.jpg', 'casa21foto2.jpg', 'casa21foto3.jpg', 'casa21foto4.jpg', 'casa21foto5.jpg', 'casa21foto6.jpg', 'casa21foto7.jpg', 'casa21foto8.jpg', 'casa21foto9.jpg', 'casa21foto10.jpg', 'casa21foto11.jpg', 'casa21foto12.jpg', 'casa21foto13.jpg'],
    ['casa22foto1.jpg', 'casa22foto2.jpg', 'casa22foto3.jpg', 'casa22foto4.jpg'],
    ['casa23foto1.jpg', 'casa23foto2.jpg', 'casa23foto3.jpg', 'casa23foto4.jpg', 'casa23foto5.jpg', 'casa23foto6.jpg', 'casa23foto7.jpg', 'casa23foto8.jpg', 'casa23foto9.jpg', 'casa23foto10.jpg', 'casa23foto11.jpg', 'casa23foto12.jpg', 'casa23foto13.jpg', 'casa23foto14.jpg', 'casa23foto15.jpg'],
    ['casa24foto1.jpg', 'casa24foto2.jpg', 'casa24foto3.jpg', 'casa24foto4.jpg', 'casa24foto5.jpg', 'casa24foto6.jpg', 'casa24foto7.jpg', 'casa24foto8.jpg', 'casa24foto9.jpg', 'casa24foto10.jpg'],
    ['casa25foto1.jpg', 'casa25foto2.jpg', 'casa25foto3.jpg', 'casa25foto4.jpg', 'casa25foto5.jpg', 'casa25foto6.jpg', 'casa25foto7.jpg'],
    ['casa26foto1.jpg', 'casa26foto2.jpg', 'casa26foto3.jpg', 'casa26foto4.jpg'],
    ['casa27foto.jpg','casa27foto1.jpg', 'casa27foto2.jpg', 'casa27foto3.jpg', 'casa27foto4.jpg', 'casa27foto5.jpg'],
    ['casa28foto1.jpg', 'casa28foto2.jpg', 'casa28foto3.jpg', 'casa28foto4.jpg', 'casa28foto5.jpg', 'casa28foto6.jpg', 'casa28foto7.jpg', 'casa28foto8.jpg', 'casa28foto9.jpg'],
    ['casa29foto1.jpg', 'casa29foto2.jpg', 'casa29foto3.jpg', 'casa29foto4.jpg', 'casa29foto5.jpg'],
    ['condominiosfoto1.jpg', 'condominiosfoto2.jpg', 'condominiosfoto3.jpg'],
    ['praia1foto1.jpg', 'praia1foto2.jpg', 'praia1foto3.jpg', 'praia1foto4.jpg', 'praia1foto5.jpg', 'praia1foto6.jpg', 'praia1foto7.jpg', 'praia1foto8.jpg', 'img/praia1foto9.jpg', 'praia1foto10.jpg'],
    ['praiav1foto1.jpg', 'praia1vfoto2.jpg', 'praiav1foto3.jpg', 'praiav1foto4.jpg', 'praiav1foto5.jpg', 'praiav1foto6.jpg', 'praiav1foto7.jpg', 'praiav1foto8.jpg', 'praiav1foto9.jpg', 'praiav1foto10.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav2foto1.jpg', 'praiav2foto2.jpg', 'praiav2foto3.jpg', 'praiav2foto4.jpg', 'praiav2foto5.jpg', 'praiav2foto6.jpg', 'praiav2foto7.jpg', 'praiav2foto8.jpg', 'praiav2foto9.jpg', 'praiav2foto10.jpg', 'praiav2foto11.jpg', 'praiav2foto12.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav3foto1.jpg', 'praiav3foto2.jpg', 'praiav3foto3.jpg', 'praiav3foto4.jpg', 'praiav3foto5.jpg', 'praiav3foto6.jpg', 'praiav3foto7.jpg', 'praiav3foto8.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav4foto1.jpg', 'praiav4foto2.jpg', 'praiav4foto3.jpg', 'praiav4foto4.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
  // Adicionar outras imagens conforme necessário                        '''''''''''''''''''''''''
];

function openModal(index) {
    currentModalIndex = index;
    currentImageIndex = 0;
    document.getElementById('modalImage').src = images[index][currentImageIndex];
    document.getElementById('imovelModal').style.display = 'flex';  
}

function closeModal() {
    document.getElementById('imovelModal').style.display = 'none';  // Fechar o modal
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images[currentModalIndex].length) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}

