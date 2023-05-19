if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/hidayatrehmat/.gradle/caches/transforms-3/b7ef0837c5b93bf01f5016087b9ff213/transformed/fbjni-0.3.0/prefab/modules/fbjni/libs/android.x86_64/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/hidayatrehmat/.gradle/caches/transforms-3/b7ef0837c5b93bf01f5016087b9ff213/transformed/fbjni-0.3.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

